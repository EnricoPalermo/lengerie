import React from "react";
import Navegador from "../Components/Navegador";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container, Row,Col } from "react-bootstrap";

import arneses from '../assets/img/modeloArneses.png'

export const ContactPage = ()=>{
return(
    <>
        <Navegador/>
        <div className="separador">
            <div className="text-center">
                <h1>Contacto</h1>
            </div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <img src={arneses} alt="" />
                    </Col>
                    <Col lg={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Enviar</Button>
                    </Form>
                    </Col>
                </Row>           
            </Container>
        </div>
  );

    </>
)
}