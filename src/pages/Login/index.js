import React from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="container vh-100 d-flex">
      <div className="vw-25 m-auto">
        <h1 className="text-white text-center"> To Do List </h1>
        <Form>
          <Form.Group className="mb-3">
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
            <Button variant="light" type="submit" className="v-100">
              Acessar
            </Button>
          </Form.Group>
          <p className="mt-2 text-white">
            Não possui cadastro?<Link to="/register"> Clique aqui.</Link>{" "}
          </p>
        </Form>
      </div>
    </div>
  );
}
