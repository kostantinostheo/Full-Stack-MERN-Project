import React from "react";
import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import "./index.css";
import { getToken, decodeToken } from "../../utils/Common";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    
    async function onLogin(event)
    {
        event.preventDefault()
        const res = await fetch(`http://localhost:3000/users/login`, {
        method: 'POST',
        headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        if(res.status === 400){
          alert('Your email or password is invalid')
        }
        const data = await res.json()
        
        if(data.token){
          localStorage.setItem('token', data.token)
          alert('Login Succesful')
          
          let decode = decodeToken(getToken())
          if(decode.status == "user")
            window.location.href = '/dashboard'
          else
            window.location.href = '/admindashboard'
        }
        console.log(data)
    }
  return (
    
    <div >
    <br/><br/><br/>
    <Container className="login-contain" >
      <Form 
      id='login-panel'  
      onSubmit={onLogin}>
        <h3 style={{'text-align' : 'center'}}>Είσοδος</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Εισαγωγή email" 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Κωδικός</Form.Label>
          <Form.Control 
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password" 
          placeholder="Κωδικός" 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label> <a href="/register" style={{"text-decoration": "none"}}>Νέα εγγραφή</a></Form.Label>
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit"
        >
          Είσοδος
        </Button>
      </Form>
    </Container>
    </div>
  );
}