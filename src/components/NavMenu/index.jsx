import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FaSave, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  NavDropdown,
  Navbar,
  Nav,
  Modal,
  Button,
  Form,
  InputGroup,
  Col,
  Row,
} from "react-bootstrap";
import api from "../../service/api";
import { FaPowerOff } from "react-icons/fa";
import { useHistory } from "react-router";
import { ToastContainer, toast, Slide } from "react-toastify";

export default function NavHeader() {
  const { user, setUser } = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [form, setForm] = useState({
    nome: user.nome,
    senha: "",
    senhaConf: "",
  });
  function handlerForm(e) {
    setForm({ ...form, [e.name]: e.value });
  }
  // function showModal() {
  //   setIsFetching(false);
  //   setModalShow(true);
  // }
  function showPassword() {
    setShowPass(!showPass);
  }
  const history = useHistory();

  async function handlerFormSubmitPerfil(e) {
    e.preventDefault();
    setIsFetching(true);
    if (form.senha === form.senhaConf) {
      try {
        await toast.promise(
          api.put("api/updateUser", form).then((res) => {
            setUser(res.data);
            setModalShow(false);
          }),
          {
            transition: Slide,
            pending: {
              render: "Salvando...",
              theme: "colored",
              position: "bottom-right",
            },
            success: {
              render: `Tarefa salva!`,
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
    }else{
      toast.error('As senhas não coincidem', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          progress: undefined,
          });
  }
    setIsFetching(false);
  }

  function logOut() {
    setUser(null);
    localStorage.removeItem("User");
    history.push("/");
  }
  return (
    <div className='d-flex justify-content-between float-end align-items-center'>
      <Navbar variant='dark' bg='' expand='lg'>
        <Nav>
          <NavDropdown
            id='nav-dropdown-dark-example'
            title={user.nome}
            menuVariant='dark'
            align='end'
          >
            {/* <NavDropdown.Item className='d-flex justify-content-end' onClick={showModal}>
              Editar Perfil
            </NavDropdown.Item>
            <NavDropdown.Divider /> */}
            <NavDropdown.Item
              onClick={logOut}
              className='d-flex justify-content-end align-items-center'
            >
              <FaPowerOff className='me-3' />
              <span> Sair </span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <ModalUserPerfil
        show={modalShow}
        formData={{ form, setForm }}
        handlerForm={handlerForm}
        handlerFormSubmit={handlerFormSubmitPerfil}
        isFetching={isFetching}
        onHide={() => setModalShow(false)}
        showPass={showPass}
        showPassword={showPassword}
      />
      <ToastContainer />
    </div>
  );
}

function ModalUserPerfil({
  show,
  formData,
  handlerForm,
  handlerFormSubmitPerfil,
  isFetching,
  onHide,
  showPass,
  showPassword,
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
        <Modal.Title>Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handlerFormSubmitPerfil(e)}>
          <Form.Group className='mb-3 '>
            <Form.Control
              type='text'
              placeholder='Nome'
              name='nome'
              className='mt-2 mb-2'
              value={formData.form.nome}
              onChange={(e) => {
                handlerForm(e.target);
              }}
              required
              disabled={isFetching}
            />
            <Row className='align-items-center gap-0'>
              <Col>
                <Form.Control
                  type={showPass ? "text" : "password"}
                  placeholder='Senha'
                  name='senha'
                  value={formData.form.senha}
                  onChange={(e) => {
                    handlerForm(e.target);
                  }}
                  required
                  disabled={isFetching}
                />
              </Col>
              <Col>
                <InputGroup>
                  <Form.Control
                    type={showPass ? "text" : "password"}
                    placeholder='Confirme a senha'
                    name='senhaConf'
                    value={formData.form.senhaConf}
                    onChange={(e) => {
                      handlerForm(e.target);
                    }}
                    required
                    disabled={isFetching}
                  />
                  <InputGroup.Text
                    className='inputGroup'
                    onClick={showPassword}
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='d-flex justify-content-end'>
            <Button variant='success' type='submit' className='v-100'>
              <FaSave /> Salvar
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
