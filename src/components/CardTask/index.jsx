import React, { useState, useContext } from "react";
import { format, addHours } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Card, Modal, Form, FloatingLabel, Button } from "react-bootstrap";
// import { ToastContainer, Slide, toast } from "react-toastify";
import api from "../../service/api";
import { UserContext } from "../../context/UserContext";
import { Status } from "../Selects";
import { Prioridades } from "../Selects";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import "./CarsTask.css"

export default function CardTask({ value }) {
  const {
    id,
    titulo,
    descricao,
    prioridade_tarefa,
    categoria,
    data_e_hora_tarefa,
    status,
    setTasks,
    Slide, toast
  } = value;
  const dateEHoraAcrescentado = (data_e_hora_tarefa) ? addHours(new Date(data_e_hora_tarefa), 3) : null;
  const [form, setForm] = useState({
    id,
    titulo,
    descricao,
    prioridade_tarefa,
    categoria,
    data_e_hora_tarefa: (dateEHoraAcrescentado) ? format(
      dateEHoraAcrescentado,
      "yyyy-MM-dd'T'HH:mm",
      ptBR
    ) : null,
    status,
  });

  const { user } = useContext(UserContext);

  const [modalShow, setModalShow] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  function handlerForm(e) {
    setForm({ ...form, [e.name]: e.value });
  }

  async function handlerFormSubmit(e) {
    e.preventDefault();
    setIsFetching(true);

    try {
      await toast.promise(
        api.put("api/updateTask", form).then(async () => {
          await api.get(`api/getTasksUser/${user.id}`).then((res) => {
            setTasks(res.data);
            setModalShow(false);
          });
        }),
        {
          transition: Slide,
          pending: {
            render: "Editando...",
            theme: "colored",
            position: "bottom-right",
          },
          success: {
            render: `Tarefa Editada!`,
            theme: "colored",
            position: "bottom-right",
          },
          error: {
            render: "Ocorreu um erro!",
            theme: "colored",
            position: "bottom-right",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  }

  function renderPrioridade(prioridade) {
    switch (prioridade) {
      case 1:
        return <span className="borda-prio">Tranquilo</span>;
      case 2:
        return <span className="borda-prio">Moderado</span>;
      case 3:
        return <span className="borda-prio">Urgente</span>;
      default:
        break;
    }
  }

  function statusDecoration(text, status) {
    switch (status) {
      case 2:
        return `${text} text-decoration-line-through`;
      default:
        return text;
    }
  }
  function showModal() {
    setIsFetching(false);
    setModalShow(true);
  }


  function backStatusGround(color , prioridade_tarefa) {
    switch (prioridade_tarefa) {
      case 1:
        return `${color} bg-success`;

      case 2:
        return `${color} bg-warning`;

      case 3:
        return `${color} bg-danger`;

      default:
        return color;

    }
  }

  async function handlerDelTask(id) {
    setIsFetching(true);
    try {
      await toast.promise(
        api.post("api/deleteTask", { id: id }).then(async (res) => {
          console.log(res)
          await api.get(`api/getTasksUser/${user.id}`).then((res) => {
            setTasks(res.data);
            setModalShow(false);
          });
        }),
        {
          transition: Slide,
          pending: {
            render: "Excluindo...",
            theme: "colored",
            position: "bottom-right",
          },
          success: {
            render: `Tarefa excluida!`,
            theme: "colored",
            position: "bottom-right",
          },
          error: {
            render: "Ocorreu um erro!",
            theme: "colored",
            position: "bottom-right",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  }

  return (
    <>
      <Card style={{ width: "30rem" }} className={backStatusGround("mt-3 btn",prioridade_tarefa)} onClick={showModal}>
        <Card.Body>
          <Card.Title
            className={statusDecoration(
              "text-dark d-flex justify-content-between",
              status
            )} 
          >
            {titulo}
            {data_e_hora_tarefa && (
              <span>
                {format(dateEHoraAcrescentado, "dd/MM/yyyy HH:mm", ptBR)}
              </span>
            )}
          </Card.Title>
          <Card.Subtitle
            className={statusDecoration(
              "mb-2 text-dark d-flex justify-content-between",
              status
            )}
          >
            {categoria}{" "}
            {prioridade_tarefa && renderPrioridade(prioridade_tarefa)}
          </Card.Subtitle>
          <Card.Text className={statusDecoration("text-dark", status)}>
            <span>Descrição: </span> {descricao}
          </Card.Text>
        </Card.Body>
      </Card>
      <ModalNewTask
        show={modalShow}
        formData={{ form, setForm }}
        handlerForm={handlerForm}
        handlerFormSubmit={handlerFormSubmit}
        isFetching={isFetching}
        handlerDelTask={handlerDelTask}
        onHide={() => setModalShow(false)}
      />
      {/* <ToastContainer /> */}
    </>
  );
}

function ModalNewTask({
  show,
  formData,
  handlerForm,
  handlerFormSubmit,
  isFetching,
  onHide,
  handlerDelTask,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      centered
      className='rounded-3'
      backdrop='static'
    >
      <Modal.Header
        closeButton
        closeVariant='white'
        className='bg-dark text-white'
      >
        <Modal.Title>Tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handlerFormSubmit(e)}>
          <Form.Group className='mb-3'>
            <FloatingLabel label='Título'>
              <Form.Control
                type='text'
                name='titulo'
                autoComplete='titulo'
                value={formData.form.titulo}
                placeholder='Titulo'
                className='mt-2 mb-2'
                onChange={(e) => handlerForm(e.target)}
                required
                disabled={isFetching}
              />
            </FloatingLabel>
            <FloatingLabel label='Descricao'>
              <Form.Control
                as='textarea'
                style={{ height: "100px" }}
                name='descricao'
                autoComplete='descricao'
                value={formData.form.descricao}
                placeholder='Descricao'
                className='mb-2'
                onChange={(e) => handlerForm(e.target)}
                required
                disabled={isFetching}
              />
            </FloatingLabel>
            <FloatingLabel label='Categoria'>
              <Form.Control
                type='text'
                name='categoria'
                autoComplete='categoria'
                value={formData.form.categoria}
                placeholder='categoria'
                className='mb-2'
                onChange={(e) => handlerForm(e.target)}
                required
                disabled={isFetching}
              />
            </FloatingLabel>
            <FloatingLabel label='Prioridade'>
              <Form.Select
                name='prioridade_tarefa'
                value={formData.form.prioridade_tarefa}
                onChange={(e) => handlerForm(e.target)}
                className='mt-2 mb-2'
                disabled={isFetching}
              >
                <Prioridades />
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel label='Status'>
              <Form.Select
                name='status'
                value={formData.form.status}
                onChange={(e) => handlerForm(e.target)}
                className='mt-2 mb-2'
                disabled={isFetching}
              >
                <Status />
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel label='Horário'>
              <Form.Control
                type='datetime-local'
                name='data_e_hora_tarefa'
                id='dataEHora'
                value={formData.form.data_e_hora_tarefa}
                className='mb-2'
                onChange={(e) => handlerForm(e.target)}
                disabled={isFetching}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className='d-flex justify-content-between'>
            <Button
              variant='outline-danger'
              className='d-flex align-items-center '
              disabled={isFetching}
              onClick={() => handlerDelTask(formData.form.id)}
            >
              <FaTrashAlt className='me-2' /> Excluir
            </Button>
            <Button
              variant='outline-success'
              type='submit'
              className='d-flex align-items-center '
              disabled={isFetching}
            >
              <FaSave className='me-2' /> Salvar
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
