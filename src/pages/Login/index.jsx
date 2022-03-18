import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    senha: "",
    checkbox: false,
  });
  const [isFetching, setIsFetching] = useState(false);
  const history = useHistory();

  function handlerForm(e) {
    setFormLogin({ ...formLogin, [e.name]: e.value });
  }

  async function authLogin(e) {
    e.preventDefault();

    setIsFetching(true);
    try {
          history.push("/dashboard")
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  }

  return (
    <div className='container vh-100 d-flex'>
      <div className='vw-25 m-auto bg-primary p-5' id='bgLogin'>
        <h1 className='text-white text-center'> To Do List </h1>
        <Form onSubmit={(e) => authLogin(e)}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              name='email'
              autoComplete='email'
              value={formLogin.email}
              placeholder='E-mail'
              className='mt-2 mb-2'
              onChange={(e) => handlerForm(e.target)}
              required
              disabled={isFetching}
            />
            <Form.Control
              type='password'
              name='senha'
              autoComplete='password'
              value={formLogin.senha}
              placeholder='Senha'
              className='mb-2'
              onChange={(e) => handlerForm(e.target)}
              required
              disabled={isFetching}
            />
          </Form.Group>
          <Form.Group className='d-flex justify-content-center'>
            <Button
              variant='light'
              type='submit'
              className='v-100'
              disabled={isFetching}
            >
              Acessar
            </Button>
          </Form.Group>
          <p className='mt-4 text-white '>
            Não possui cadastro?<Link to='/register' className='text-white'> Clique aqui.</Link>{" "}
          </p>
        </Form>
      </div>
      {/* TOAST */}
      <ToastContainer />
    </div>
  );
}
