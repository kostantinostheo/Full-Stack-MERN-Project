import React from "react";
import { Button, Form, Container } from 'react-bootstrap';
import "./index.css";

function Login() {
  return (
    <Container id='login-contain'>
      <Form id='login-panel'>
        <h3 style={{'text-align' : 'center'}}>Είσοδος</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Εισαγωγή email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Κωδικός</Form.Label>
          <Form.Control type="password" placeholder="Κωδικός" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Να με θυμάσαι"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Είσοδος
        </Button>
      </Form>
    </Container>
  );
}

export default Login;