import React, { useState } from "react";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Register() {
  
  

  return (
    <div className="container vh-100 d-flex">
      <div className="vw-25 m-auto">
      <p className="mt-2 text-white">
            <Link to="/"> Voltar</Link>{""}
          </p>
        <h1 className="text-white text-center"> To Do List(Cadastro) </h1>
        <Form>
          <Form.Group className="mb-3">
          <Form.Control
              type="text"
              placeholder="Nome"
              className="mt-2 mb-2"
            />
            <Form.Control
              type="email"
              placeholder="E-mail"
              className="mt-2 mb-2"
            />
            <Form.Control
              type="password"
              placeholder="Senha"
              className="mb-2"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
           <Button  variant="primary" type="submit" className="v-100">
              Cadastrar
            </Button>
           
          </Form.Group>
          
        </Form>
      </div>
    </div>
  )
}
