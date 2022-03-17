import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";
import { useHistory } from "react-router";


export default function NavHeader() {
  const { user } = useContext(UserContext);

  const history = useHistory();

  function logOut() {
    history.push("/");
  }
  return (
    <div className='text-white'>
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

