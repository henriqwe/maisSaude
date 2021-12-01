import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from '../../service/api'
import { ToastContainer, toast, Slide } from 'react-toastify';

export function Login() {

  const [formLogin, setFormLogin] = useState({ email: '', senha: '' })
  const [isFetching,setIsFetching] = useState(false)

  function handlerForm(e) {
    setFormLogin({ ...formLogin, [e.name]: e.value })
  }

  async function authLogin(e) {
    e.preventDefault()
    
    setIsFetching(true)
    try{
      await toast.promise(api.post('api/auth', formLogin),{
        transition: Slide,
        pending: {
          render: 'Verificando...',
          theme: "colored",
          position: "bottom-right"
        },
        success: {
          render: 'Seja bem vindo',
          theme: "colored",
          position: "bottom-right"
        },
        error: {
          render: 'Usuário/senha inválido',
          theme: "colored",
          position: "bottom-right"
        }
      });
    }catch(error){}
    setIsFetching(false)
  }

  return (
    <div className="container vh-100 d-flex">
      <div className="vw-25 m-auto">
        <h1 className="text-white text-center"> To Do List </h1>
        <Form onSubmit={(e) => authLogin(e)}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name='email'
              value={formLogin.email}
              placeholder="E-mail"
              className="mt-2 mb-2"
              onChange={(e) => handlerForm(e.target)}
              required
              disabled={isFetching}
            />
            <Form.Control
              type="password"
              name='senha'
              value={formLogin.senha}
              placeholder="Senha"
              className="mb-2"
              onChange={(e) => handlerForm(e.target)}
              required
              disabled={isFetching}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button variant="light" type="submit" className="v-100" disabled={isFetching}>
              Acessar
            </Button>
          </Form.Group>
          <p className="mt-2 text-white">
            Não possui cadastro?<Link to="/register"> Clique aqui.</Link>{" "}
          </p>
        </Form>
      </div>
      { /* TOAST */}
      <ToastContainer />
    </div>
  );
}
