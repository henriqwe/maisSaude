import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import { UserContext } from "../../context/UserContext";
import { ToastContainer } from "react-toastify";
import api from "../../service/api";
import NewTask from "../../components/NewTask";
import { DropdownButton, Dropdown, Container, Row, Col } from "react-bootstrap";
import CardTask from "../../components/CardTask";

export function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const { user } = useContext(UserContext);
  // const [tasksFiltred, setTasksFiltred] = useState([]);

  useEffect(async () => {
    await api.get(`api/getTasksUser/${user.id}`).then((res) => {
      setTasks(res.data);
      // setTasksFiltred(res.data)
    });
  }, [user.id]);

  return (
    <>
      <Header />
      <Container className='px-5 mt-4'>
        <Row>
          <Col>
            <NewTask setTasks={setTasks} />
          </Col>
          <Col className='justify-content-end d-flex'>
            <FilterBtn />
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center d-flex'>
            <ul className='p-0'>
              {tasks.map(({id,titulo,descricao,prioridade_tarefa,categoria,data_e_hora_tarefa,status}) => {
                return (
                  <li key={id} className='text-white list-unstyled'>
                    <CardTask value={{id,titulo,descricao,prioridade_tarefa,categoria,data_e_hora_tarefa,status,setTasks}} />
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}

function FilterBtn() {
  return (
    <DropdownButton align='end' title='Filtro'>
      <Dropdown.Item eventKey='1'>todos</Dropdown.Item>
      <Dropdown.Item eventKey='2'>Não inciados</Dropdown.Item>
      <Dropdown.Item eventKey='3'>Em andamento</Dropdown.Item>
      <Dropdown.Item eventKey='4'>Concluidos</Dropdown.Item>
    </DropdownButton>
  );
}
