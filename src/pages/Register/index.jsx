import React, { useState } from "react";
import "./Register.css";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FaAngleLeft, FaEyeSlash, FaEye, FaCheck } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';

export function Register() {

    const [form, setForm] = useState({ nome: '', email: '', senha: '', senhaConf: '' })
    const [showPass, setShowPass] = useState(false)
    const [isFetching, setIsFetching] = useState(false)

    const history = useHistory()

    function handlerClick() {
        history.push('/')
    }

    function handlerForm(e) {
        setForm({ ...form, [e.name]: e.value })
    }

    function showPassword() {
        setShowPass(!showPass)
    }

    async function createUser(e) {
        e.preventDefault()

        if (form.senha === form.senhaConf) {
            setIsFetching(true)
            
            setIsFetching(false)
        }
    }

    return (
        <div className="container vh-100 d-flex">
            <div className="w-auto m-auto bg-primary p-5 
            badge">
                <h1 className="text-white text-center"> Cadastro </h1>
                <Form className='w-100' onSubmit={(e) => createUser(e)}>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Nome"
                            name='nome'
                            className="mt-2 mb-2"
                            value={form.nome}
                            onChange={(e) => {
                                handlerForm(e.target)
                            }}
                            required
                            disabled={isFetching}
                        />
                        <Form.Control
                            type="email"
                            placeholder="E-mail"
                            className="mt-2 mb-2"
                            name='email'
                            value={form.email}
                            onChange={(e) => {
                                handlerForm(e.target)
                            }}
                            required
                            disabled={isFetching}

                        />
                        <Row className="align-items-center gap-0">
                            <Col >
                                <Form.Control
                                    type={showPass ? "text" : "password"}
                                    placeholder="Senha"
                                    name='senha'
                                    value={form.senha}
                                    onChange={(e) => {
                                        handlerForm(e.target)
                                    }}
                                    required
                                    disabled={isFetching}
                                />
                            </Col>
                            <Col>
                                <InputGroup>
                                    <Form.Control
                                        type={showPass ? "text" : "password"}
                                        placeholder="Confirme a senha"
                                        name='senhaConf'
                                        value={form.senhaConf}
                                        onChange={(e) => {
                                            handlerForm(e.target)
                                        }}
                                        required
                                        disabled={isFetching}
                                    />
                                    <InputGroup.Text className='inputGroup' onClick={showPassword}>
                                        {showPass
                                            ? <FaEyeSlash />
                                            : <FaEye />}
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between">
                        <Button onClick={handlerClick} className="v-100">
                            <FaAngleLeft /> Voltar
                        </Button>
                        <Button variant="success" type="submit" className="v-100">
                        <FaCheck /> Cadastrar
                        </Button>

                    </Form.Group>

                </Form>
            </div>
            <ToastContainer />
        </div>
    )
}