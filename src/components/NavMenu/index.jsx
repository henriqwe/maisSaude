import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";
import { useHistory } from "react-router";

export default function NavHeader() {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

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
    </div>
  );
}
