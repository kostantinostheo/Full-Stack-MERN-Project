import React from 'react';
import { useState } from 'react';
import { Form, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './index.css'
export default function Register()
{
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [phone, setPhone] = useState('')
    const [mobile, setMobile] = useState('')
    const [date, setDate] = useState(new Date());

    let address
    let city
    let city_id
    let _id_number
    let _id_city
    
    async function onRegister(event)
    {

        if(firstname === "" || lastname === "" || email === "" || password === "" ){
            alert('Τα στοιχεία με * είναι υποχρεωτικά')
        }
        else{

            address = " "
            city = " "
            city_id = " "
            _id_number = " "
            _id_city = " "
            
            event.preventDefault()
            await fetch(`http://localhost:3000/users/register`, {
            method: 'POST',
            headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    password,
                    date,
                    phone,
                    mobile,
                    address,
                    city,
                    city_id,
                    _id_number,
                    _id_city
                }),
            })
            alert('Επιτυχής Εγγραφή')
            window.location.href = '/login'
        }
    }

    return(
        <div><br/><br/>
            <div className="register-user-data-form">
            <h3>Εγγραφή</h3><br/>
                <Form onSubmit={onRegister}>
                    <Form.Group className="mb-2">
                        <Form.Control 
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        placeholder="Όνομα*"/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type="text"
                        placeholder='Επώνυμο*'/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email*'/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control 
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder='Κωδικός*'/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <DatePicker className='date-picker' selected={date} onChange={(d) => setDate(d)} />
                    </Form.Group>
                    <Row >
                        <Form.Group className="mb-2">
                            <Form.Control 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder='Τηλέφωνο'/>
                        </Form.Group>
                        
                        <Form.Group className="mb-2">
                            <Form.Control 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            type="text"
                            placeholder='Κινητό'/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-2">
                        <Form.Control id="submit-but" type="submit" value="Εγγραφή"/>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}