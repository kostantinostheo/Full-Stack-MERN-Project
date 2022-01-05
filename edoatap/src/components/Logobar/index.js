import React from 'react';
import { Col, Row, Image, Container, Navbar } from 'react-bootstrap'
import Logo from '../../images/Logo.png';
import './index.css';
import {getToken} from '../../utils/Common'
import LoginBut from '../Buttons/LoginBut'
import LogoutBut from '../Buttons/LogoutBut'

export default function Logobar() {

  const token = getToken()

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
          <div>
            {
              token && ( <LogoutBut/>) 
            }
            {
              !token && ( <LoginBut/> )
            }
          </div>
        </Row>
      </Container>
    </Navbar>
  );
}
  