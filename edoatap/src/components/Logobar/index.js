import React from 'react';
import { Col, Row, Image, Container, Navbar } from 'react-bootstrap'
import Logo from '../../images/Logo.png';
import './index.css';

export default function Logobar() {
  return (
    <Navbar className='logobar'>
      <Container>
        <Navbar.Brand href="/"> <Image src={Logo} responsive/></Navbar.Brand>
      </Container>
      <Container>
        <Row >
          <Col id='locale'>English</Col>
        </Row>
        <Row>
          <Col><a id='login' href="/login">Είσοδος</a></Col>
        </Row>
      </Container>
    </Navbar>
  );
}
  