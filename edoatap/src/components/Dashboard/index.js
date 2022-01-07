import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Form, Row , Col, Navbar, Button, FormLabel} from 'react-bootstrap'
import base64 from 'base-64';

import './index.css'

export default function Dashboard()
{
    const [status, setStatus] = useState()
    const [user_id, setId] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()

    const history = useNavigate()
    
    let decodedToken

    async function getUserData(){
        const res = await fetch(`http://localhost:3000/users/${decodedToken.user_id}`)
        const data = await res.json()
        console.log(decodedToken.user_id)
        setProfile(data)
    }

    function setProfile(data){
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setEmail(data.email)
    }

    useEffect(()=> {
        const token = localStorage.getItem('token')
        console.log("malaka")
        if(token){
            const parts = token.split('.');
            decodedToken = base64.decode(parts[1]);
            decodedToken = JSON.parse(decodedToken);

            if(!decodedToken){
                localStorage.removeItem('token')
                history.reaplace('/login')
            }else{
                setStatus(decodedToken.status)
                setId(decodedToken.user_id)
                getUserData()
            }
        }
        else{
            console.log("ups")
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    }, [])

    const x = true

    return(
    <div>
        <Navbar className='dashbar'>
            <div>
            <Row id="data-raw">
                <Col><h3 className="name-label">{firstname} {lastname}</h3></Col>
                <Col><Button href="/dashboard" className="edit-profile">Επεξεργασία Προφίλ</Button></Col>
            </Row>
            </div>
        </Navbar>
        <Row id="user-details-label">
            <h4><b>Προσωπικά Στοιχεία</b></h4>
        </Row>
        <div className="user-data-form">
            <Form.Group className="mb-3">
                <Form.Label style={{"float": "left"}}>Email</Form.Label>
                <Form.Control placeholder={email} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Γέννησης</Form.Label>
                <Form.Control placeholder="12/04/12 hc" disabled />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Τηλέφωνο</Form.Label>
                <Form.Control type="email" placeholder="2104200666" disabled/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Κινητό</Form.Label>
                <Form.Control type="password" placeholder="6987621345" disabled/>
                </Form.Group>
            </Row>
        </div>
        <Row id="applications-label">
            <h4><b>Αιτήσεις</b></h4>
        </Row>
        <table style={{"width":"65%"}}>
            <tr>
                <th style={{"width": "15%"}}>Ημερομηνία</th>
                <th style={{"width": "25%"}}>Τύπος</th>
                <th style={{"width": "25%"}}>Επίπεδο Σπουδών</th>
                <th style={{"width": "30%"}}>Κατάσταση</th>
            </tr>
            <tr>
                <td>12/05/2011</td>
                <td>Αναγνώριση Τίτλου</td>
                <td>Βασικό Πτυχίο</td>
                <td>Αποθηκευμένη</td>
            </tr>
            <tr>
                <td>14/01/2014</td>
                <td>Αναγνώριση Τίτλου</td>
                <td>Βασικό Πτυχίο</td>
                <td>Υπό επεξεργασία</td>
            </tr>
        </table>
    </div>
    );
}