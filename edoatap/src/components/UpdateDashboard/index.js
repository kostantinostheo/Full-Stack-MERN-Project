import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Form, Row , Col } from 'react-bootstrap'
import base64 from 'base-64';

import './index.css'

export default function UpdateDashboard()
{
    const [status, setStatus] = useState()
    const [user_id, setId] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState('')
    const [mobile, setMobile] = useState('')
    const [date, setDate] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [city_id, setCityId] = useState();
    const [_id_number, setIdNum] = useState();
    const [_id_city, setIdCity] = useState();


    const history = useNavigate()
    
    let decodedToken

    async function getUserData(){
        const res = await fetch(`http://localhost:3000/users/${decodedToken.user_id}`)
        const data = await res.json()
        await setProfile(data)
    }

    async function setProfile(data){
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setEmail(data.email)
        setPhone(data.phone)
        setMobile(data.mobile)
        let temp_date =  await convertFromStringToDate(data.date)
        setDate(temp_date)
        setAddress(data.address)
        setCity(data.city)
        setCityId(data.city_id)
        setIdNum(data._id_number)
        setIdCity(data._id_city)
    }
    
    async function convertFromStringToDate(responseDate) {
        let dateComponents = responseDate.split('T');
        return new Date(dateComponents[0]).toLocaleDateString("el-GR")
    }
    
    useEffect(()=> {
        const token = localStorage.getItem('token')
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
                //Getting current data from the db and set them as placeholders
                getUserData()
            }
        }
        else{
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    }, [])

    async function UpdateUserData(event){
        console.log(user_id)
        event.preventDefault()
        await fetch(`http://localhost:3000/users/${user_id}`, {
        method: 'PATCH',
        headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                mobile: mobile,
                address: address,
                city: city,
                city_id: city_id,
                _id_number: _id_number,
                _id_city: _id_city
            }),
        })
        alert('Επιτυχής Αλλαγή Στοιχείων')
        window.location.href = '/dashboard'
    }

    return(
    <div>
        <Row id="user-details-label">
            <h4><b>Αλλαγή Προσωπικών Στοιχείων</b></h4>
        </Row>
        <div className="user-data-form">
        <Form onSubmit={UpdateUserData}>
            <Row className="mb-1">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Όνομα</Form.Label>
                    <Form.Control 
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder={firstname}  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Επώνυμο</Form.Label>
                    <Form.Control 
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder={lastname}  />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label style={{"float": "left"}}>Email</Form.Label>
                <Form.Control 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder={email}  />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Γέννησης</Form.Label>
                <Form.Control placeholder={date} disabled/>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{"float": "left"}}>Τηλέφωνο</Form.Label>
                    <Form.Control
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text" 
                    placeholder={phone} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label style={{"float": "left"}}>Κινητό</Form.Label>
                    <Form.Control 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    type="text" 
                    placeholder={mobile} />
                </Form.Group>
            </Row>
            <Row className="mb-1">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Διεύθυνση</Form.Label>
                    <Form.Control 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder={address}  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Πόλη</Form.Label>
                    <Form.Control 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder={city}  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Τ.Κ.</Form.Label>
                    <Form.Control
                    value={city_id}
                    onChange={(e) => setCityId(e.target.value)}
                    type="text" 
                    placeholder={city_id}  />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Αριθμός Δ.Τ.</Form.Label>
                <Form.Control
                value={_id_number}
                onChange={(e) => setIdNum(e.target.value)}
                type="text" 
                placeholder={_id_number} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Έκδουσα Αρχή</Form.Label>
                <Form.Control
                value={_id_city}
                onChange={(e) => setIdCity(e.target.value)}
                type="text" 
                placeholder={_id_city} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Control id="update-submit-but" type="submit" value="Υποβολή"/>
                <a id="update-cancel-but" href="/dashboard"> Άκυρο</a>
            </Form.Group>
        </Form>
        
        </div>
    </div>
    );
}