import React, { useState, useContext } from 'react'
import './Login.css'
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { UserContext } from '../../context/UserContext'

export function Login() {
  const { setUser } = useContext(UserContext)
  const [formLogin, setFormLogin] = useState({
    nome: '',
    senha: '',
    checkbox: false
  })
  const [isFetching, setIsFetching] = useState(false)
  const history = useHistory()

  function handlerForm(e) {
    setFormLogin({ ...formLogin, [e.name]: e.value })
  }

  async function authLogin(e) {
    e.preventDefault()

    setIsFetching(true)
    try {
      console.log(e)
      setUser({ nome: formLogin.nome })
      history.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
    setIsFetching(false)
  }

  return (
    <div className="container vh-100 d-flex">
      <div className="vw-25 m-auto bg-primary p-5">
        <h1 className="text-white text-center"> MaisSaúde </h1>
        <Form onSubmit={(e) => authLogin(e)}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="nome"
              autoComplete="nome"
              value={formLogin.nome}
              placeholder="Nome"
              className="mt-2 mb-2"
              onChange={(e) => handlerForm(e.target)}
              required
              disabled={isFetching}
            />
            <Form.Control
              type="password"
              name="senha"
              autoComplete="password"
              value={formLogin.senha}
              placeholder="Senha"
              className="mb-2"
              onChange={(e) => handlerForm(e.target)}
              required
              disabled={isFetching}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button
              variant="light"
              type="submit"
              className="v-100"
              disabled={isFetching}
            >
              Acessar
            </Button>
          </Form.Group>
          <p className="mt-4 text-white ">
            Não possui cadastro?
            <Link to="/register" className="text-white">
              {' '}
              Clique aqui.
            </Link>{' '}
          </p>
        </Form>
      </div>
      {/* TOAST */}
      <ToastContainer />
    </div>
  )
}
