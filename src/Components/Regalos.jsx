import React from "react";
import { GifCard } from "./GiftCard";
import { Col, Container, Row } from "react-bootstrap";
import { Regalo } from "./Regalo";

export const Regalos = ()=>{
return(
    <>
    <Container fluid>
        <Row>
            <Col lg={6} sm={12} className="izq">
            <GifCard/>
            </Col>
            <Col lg={6} sm={12} className="der">
            <Regalo/>
            </Col>
        </Row>
    </Container>
    </>
)
}