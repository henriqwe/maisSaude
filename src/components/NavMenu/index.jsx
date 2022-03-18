import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";
import { useHistory } from "react-router";
import "./NavMenu.css";


export default function NavHeader() {
  const { user } = useContext(UserContext);

  const history = useHistory();

  function logOut() {
    history.push("/");
  }

  function imc() {
    history.push("/imc");
  }

  function dashboard() {
    history.push("/dashboard");
  }

  function exercicios() {
    history.push("/exercicios");
  }

  function buscarEsp(){
    history.push("/buscaresp")
  }

  return (
    <div className='text-white d-flex'>
      
      <form className="d-flex">

        <button className="btn z-index-3 " onClick={dashboard}>
          Início
        </button>

        <button className="btn " onClick={imc}>
          IMC
        </button>
      
        <button className="btn" onClick={exercicios}>
          Exercite-se
        </button>

        <button className="btn" onClick={buscarEsp}>
          Encontre Especialistas
        </button>
      </form>
      <Navbar variant='dark' bg='' expand='lg'>
        <Nav className="">
          <NavDropdown
            id='nav-dropdown-dark-example'
            title={user.nome}
            align='end'
          >
            <NavDropdown.Item
              onClick={logOut}
              className='z-index-3 '
            >
              <FaPowerOff className='me-3' />
              <span> Sair </span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}


// d-flex justify-content-between float-end align-items-center
// d-flex justify-content-end align-items-center

