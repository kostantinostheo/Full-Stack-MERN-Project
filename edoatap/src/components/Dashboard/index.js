import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Form, Row , Col, Navbar, Button, Table} from 'react-bootstrap'
import base64 from 'base-64';

import './index.css'

export default function Dashboard()
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

    //Applications
    const [index, setIndex] = useState([]);
    const [applicationStatus, setApplicationStatus] = useState([]);
    const [applicationType, setApplicationType] = useState([]);
    const [applicationDate, setApplicationDate] = useState([]);

    const history = useNavigate()
    
    let decodedToken
    let [i, setI] = useState();
    const [applicationNum, setApplicationNum] = useState();

    async function getUserData(){
        const res = await fetch(`http://localhost:3000/users/${decodedToken.user_id}`)
        const data = await res.json()
        await setProfile(data)
    }

    async function getApplications(){
        const res = await fetch(`http://localhost:3000/applications/api/${decodedToken.user_id}`)
        const data = await res.json()
        setApplicationNum(data.length)
        for (let i = 0; i < data.length; i++) {
            setIndex( oldVal => [...oldVal, data[i].application_id])
            setApplicationStatus( oldVal => [...oldVal, data[i].status] )
            setApplicationType( oldVal => [...oldVal, data[i].application_type] )
            const dateConverted = await convertFromStringToDate(data[i].application_date)
            setApplicationDate( oldVal => [...oldVal, dateConverted ])
        }
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
    const NextPage = () => {
        const temp = i+4
        setI(temp)
    }
    const PrevPage = () => {
        const temp = i-4
        setI(temp)
      }


    useEffect(()=> {
        setI(0)
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
                getUserData()
                getApplications()
            }
        }
        else{
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    }, [])

    return(
    <div>
        <Navbar className='dashbar'>
            <div>
            <Row id="data-raw">
                <Col><h3 className="name-label">{firstname} {lastname}</h3></Col>
                <Col><Button href="/update_dashboard" className="edit-profile">Επεξεργασία Προφίλ</Button></Col>
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
                <Form.Control placeholder={date} disabled />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Τηλέφωνο</Form.Label>
                <Form.Control type="text" placeholder={phone} disabled/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Κινητό</Form.Label>
                <Form.Control type="text" placeholder={mobile} disabled/>
                </Form.Group>
            </Row>
            <Row className="mb-1">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Διεύθυνση</Form.Label>
                    <Form.Control placeholder={address} disabled />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Πόλη</Form.Label>
                    <Form.Control placeholder={city} disabled />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Τ.Κ.</Form.Label>
                    <Form.Control placeholder={city_id} disabled />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Αριθμός Δ.Τ.</Form.Label>
                <Form.Control type="text" placeholder={_id_number} disabled/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Έκδουσα Αρχή</Form.Label>
                <Form.Control type="text" placeholder={_id_city} disabled/>
                </Form.Group>
            </Row>
        </div>
        <Row id="applications-label">
            <h4><b>Αιτήσεις</b></h4>
        </Row>
        <div className="user-applicatio-table">
        <Table  striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Ημερομηνία</th>
                <th>Τύπος Αίτησης</th>
                <th>Κατάσταση</th>
                <th>Ενέργεια</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{index[i]}</td>
                <td>{applicationDate[i]}</td>
                <td>{applicationType[i]}</td>
                <td>{applicationStatus[i]}</td>
                <td className="buttons-holder">
                        { 
                        applicationStatus[i] === "Αποθηκευμένη" &&
                        (<Button className="but-table-edit">Edit</Button>) 
                        }
                        <Button className="but-table-delete" >Delete</Button><Button className="but-table-preview">Preview</Button>
                </td>
                </tr>
                <tr>
                <td>{index[i+1]}</td>
                <td>{applicationDate[i+1]}</td>
                <td>{applicationType[i+1]}</td>
                <td>{applicationStatus[i+1]}</td>
                <td className="buttons-holder">{ 
                        applicationStatus[i+1] === "Αποθηκευμένη" &&
                        (<Button className="but-table-edit">Edit</Button>) 
                        }
                        <Button className="but-table-delete" >Delete</Button><Button className="but-table-preview">Preview</Button>
                </td>
                </tr>
                <tr>
                <td>{index[i+2]}</td>
                <td>{applicationDate[i+2]}</td>
                <td>{applicationType[i+2]}</td>
                <td>{applicationStatus[i+2]}</td>
                <td className="buttons-holder">{ 
                        applicationStatus[i+2] === "Αποθηκευμένη" &&
                        (<Button className="but-table-edit">Edit</Button>) 
                        }
                        <Button className="but-table-delete" >Delete</Button><Button className="but-table-preview">Preview</Button>
                </td>
                </tr>
                <tr>
                <td>{index[i+3]}</td>
                <td>{applicationDate[i+3]}</td>
                <td>{applicationType[i+3]}</td>
                <td>{applicationStatus[i+3]}</td>
                <td className="buttons-holder">{ 
                        applicationStatus[i+3] === "Αποθηκευμένη" &&
                        (<Button className="but-table-edit">Edit</Button>) 
                        }
                        <Button className="but-table-delete" >Delete</Button><Button className="but-table-preview">Preview</Button>
                </td>
                </tr>
            </tbody>
        </Table>
        { applicationNum > 4 && 
        (
            <Button className="change-page" style={{"float" : "right"}} onClick={NextPage} >Επόμενη</Button>
        )
        }
        { applicationNum > 4 && i >=4 &&
            (<Button className="change-page" style={{"float" : "right"}} onClick={PrevPage}>Προηγούμενη</Button>)
        }

        </div>
    </div>
    );
}