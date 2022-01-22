import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {Form, Row , Col, Button, Table} from 'react-bootstrap'
import base64 from 'base-64';
import { decodeToken , ConvertToLocalDate, getToken } from '../../utils/Common'
import { Trash } from 'react-bootstrap-icons'
import './index.css'

export default function Dashboard()
{
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

    //Applications data
    let temp_status
    let temp_result
    const [application_status, set_application_status] = useState()
    const [application_result, set_application_result] = useState()
    const [application_type, setApplication_type] = useState()
    const [application_date, setApplication_date] = useState()
    const [type_of_studies, setType_of_studies] = useState()
    const [country_of_studies, set_country_of_studies] = useState()
    const [university, set_university] = useState()
    const [university_type, set_university_type] = useState()
    const [title_of_studies, set_title_of_studies] = useState()
    const [credits, set_credits] = useState()
    const [sign_in_date, set_sign_in_date] = useState()
    const [date_of_graduation, set_date_of_graduation] = useState()
    const [years_of_studies, set_years_of_studies] = useState()
    const [university_department_of_choice, set_university_department_of_choice] = useState()
    const [notes, getNotes] = useState()

    //Applications
    const [index, setIndex] = useState([]);
    const [applicationStatus, setApplicationStatus] = useState([]);
    const [applicationResults, getApplicationResults] = useState([]);
    const [applicationType, setApplicationType] = useState([]);
    const [applicationDate, setApplicationDate] = useState([]);

    const [activeApplication, setActiveApplication] = useState()
    const history = useNavigate()
    
    let decodedToken
    let [i, setI] = useState();
    const [applicationNum, setApplicationNum] = useState();


    async function setAll(_application_id){
        setActiveApplication(_application_id)
        await fetchApplicationData(_application_id)
    }

    let newResult
    async function UpdateResult(event){
        event.preventDefault()
        try {
            await fetch(`http://localhost:3000/applications/api/update/${activeApplication}`, {
            method: 'PATCH',
            headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    result: newResult
                }),
            })
            window.location.reload();
        } catch (error) {
            console.log(error)
        }   
    }
    async function UpdateNotes(event){
        event.preventDefault()
        try {
            await fetch(`http://localhost:3000/applications/api/update/${activeApplication}`, {
            method: 'PATCH',
            headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    notes: notes
                }),
            })
            window.location.reload();
        } catch (error) {
            console.log(error)
        }   
    }
    async function submit(event){
        newResult = "Επικυρώθηκε"
        await UpdateResult(event)
    }
    async function update(event){
        await UpdateResult(event)
    }
    async function reject(event){
        newResult = "Απορρίφθηκε"
        await UpdateResult(event)
    }
    async function getUserData(_user_id){
        console.log(_user_id)
        const res = await fetch(`http://localhost:3000/users/${_user_id}`)
        const data = await res.json()
        await setProfile(data)
    }

    async function fetchApplicationData(_application_id){
        console.log(_application_id)
        const res = await fetch(`http://localhost:3000/applications/api/appid/${_application_id}`)
        const data = await res.json()
        console.log(data.user_id)
        setApplicationData(data)
        await getUserData(data.user_id)
    }

    async function getApplications(){
        const res = await fetch(`http://localhost:3000/applications/api/`)
        const data = await res.json()
        setApplicationNum(data.length)

        for (let i = 0; i < data.length; i++) {
            setIndex( oldVal => [...oldVal, data[i].application_id])
            setApplicationStatus( oldVal => [...oldVal, data[i].status] )
            getApplicationResults(oldVal => [...oldVal, data[i].result] )
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
    function setApplicationData(data){
        let _user_id = data.user_id.toString()
        setId(_user_id)
        set_application_status(data.status)
        set_application_result(data.result)
        setApplication_type(data.application_type)
        const temp_date = ConvertToLocalDate(data.application_date)
        setApplication_date(temp_date)
        setType_of_studies(data.type_of_studies)
        set_country_of_studies(data.country_of_studies)
        set_university(data.university)
        set_university_type(data.university_type)
        set_title_of_studies(data.title_of_studies)
        set_credits(data.credits)
        const temp_sign_date = ConvertToLocalDate(data.sign_in_date)
        set_sign_in_date(temp_sign_date)
        const temp_grad_date = ConvertToLocalDate(data.date_of_graduation)
        set_date_of_graduation(temp_grad_date)
        set_years_of_studies(data.years_of_studies)
        set_university_department_of_choice(data.university_department_of_choice)
    }
    async function convertFromStringToDate(responseDate) {
        let dateComponents = responseDate.split('T');
        return new Date(dateComponents[0]).toLocaleDateString("el-GR")
    }
    const NextPage = () => {
        const temp = i+8
        setI(temp)
    }
    const PrevPage = () => {
        const temp = i-8
        setI(temp)
      }

    useEffect(()=> {
        setI(0)
        const token = localStorage.getItem('token')
        let decode = decodeToken(token)
        if(token && decode.status == "admin"){
            const parts = token.split('.');
            decodedToken = base64.decode(parts[1]);
            decodedToken = JSON.parse(decodedToken);

            if(!decodedToken){
                localStorage.removeItem('token')
                history.reaplace('/login')
            }else{
                getApplications()
            }
        }
        else{
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    }
    , [])


    return(
    <div>
        <Row id="applications-label">
            <Col><h4><b>Αιτήσεις</b></h4></Col>
        </Row>
        <div className="user-applicatio-table">
        <Table  striped bordered hover size="xl">
        <thead>
                <tr>
                <th>#</th>
                <th>Ημερομηνία</th>
                <th>Τύπος Αίτησης</th>
                <th>Κατάσταση</th>
                <th>Θέση</th>
                <th>Ενέργεια</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{index[i]}</td>
                <td>{applicationDate[i]}</td>
                <td>{applicationType[i]}</td>
                <td>{applicationStatus[i]}</td>
                <td>{applicationResults[i]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                {  applicationStatus[i] === "Οριστικοποιημένη" && applicationResults[i] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+1]}</td>
                <td>{applicationDate[i+1]}</td>
                <td>{applicationType[i+1]}</td>
                <td>{applicationStatus[i+1]}</td>
                <td>{applicationResults[i+1]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                {  applicationStatus[i+1] === "Οριστικοποιημένη" && applicationResults[i+1] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+1])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+2]}</td>
                <td>{applicationDate[i+2]}</td>
                <td>{applicationType[i+2]}</td>
                <td>{applicationStatus[i+2]}</td>
                <td>{applicationResults[i+2]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                {  applicationStatus[i+2] === "Οριστικοποιημένη" && applicationResults[i+2] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+2])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+3]}</td>
                <td>{applicationDate[i+3]}</td>
                <td>{applicationType[i+3]}</td>
                <td>{applicationStatus[i+3]}</td>
                <td>{applicationResults[i+3]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                    {  applicationStatus[i+3] === "Οριστικοποιημένη" && applicationResults[i+3] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+3])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+4]}</td>
                <td>{applicationDate[i+4]}</td>
                <td>{applicationType[i+4]}</td>
                <td>{applicationStatus[i+4]}</td>
                <td>{applicationResults[i+4]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                {  applicationStatus[i+4] === "Οριστικοποιημένη" && applicationResults[i+4] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+4])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+5]}</td>
                <td>{applicationDate[i+5]}</td>
                <td>{applicationType[i+5]}</td>
                <td>{applicationStatus[i+5]}</td>
                <td>{applicationResults[i+5]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                {  applicationStatus[i+5] === "Οριστικοποιημένη" && applicationResults[i+5] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+5])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+6]}</td>
                <td>{applicationDate[i+6]}</td>
                <td>{applicationType[i+6]}</td>
                <td>{applicationStatus[i+6]}</td>
                <td>{applicationResults[i+6]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                { applicationStatus[i+6] === "Οριστικοποιημένη" && applicationResults[i+6] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+6])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
                <tr>
                <td>{index[i+7]}</td>
                <td>{applicationDate[i+7]}</td>
                <td>{applicationType[i+7]}</td>
                <td>{applicationStatus[i+7]}</td>
                <td>{applicationResults[i+7]}</td>
                <td className="buttons-holder">
                <Button className="but-table-delete" ><Trash/></Button>
                {  applicationStatus[i+7] === "Οριστικοποιημένη" && applicationResults[i+7] === "Υπο Επεξεργασία" &&
                    (
                    <div>
                    <Button className="but-table-preview" onClick={() => { setAll(index[i+7])}}>Προβολή</Button>
                    </div>)
                   }
                </td>
                </tr>
            </tbody>
        </Table>
        <div>
        { applicationNum > 8 && applicationNum > i+8 && 
        (
            <Button className="change-page" style={{"float" : "right"}} onClick={NextPage} >Επόμενη</Button>
        )
        }
        { applicationNum > 8 && i >=8 &&
            (<Button className="change-page" style={{"float" : "left"}} onClick={PrevPage}>Προηγούμενη</Button>)
        }
        </div>
        </div>
        <div>
        <br/>
        <br/>
        <Row id="user-details-label">
            <h4><b>Στοιχεία Αιτούντος</b></h4>
        </Row>
        <div className="user-data-form">
            <Form.Group className="mb-3">
                <Form.Label style={{"float": "left"}}>Email</Form.Label>
                <Form.Control placeholder={email} disabled/>
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
                    <Form.Control placeholder={address} disabled/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Πόλη</Form.Label>
                    <Form.Control placeholder={city}  disabled/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Τ.Κ.</Form.Label>
                    <Form.Control placeholder={city_id} disabled/>
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

        <br/>
        
        <Row id="user-details-label">
            <h4><b>Πληροφορίες Αίτησης</b></h4>
        </Row><br/>
        
        <div className="user-data-form"> 
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                <Form.Label  style={{"textAlign": "left"}}>Είδος Αίτησης</Form.Label>
                <Form.Control type="text" placeholder={application_type} disabled/>
                </Form.Group> 
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"textAlign": "left"}}>Είδος Σπουδών</Form.Label>
                    <Form.Control type="text" placeholder={type_of_studies} disabled/>
                </Form.Group> 

                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Χώρα Σπουδών</Form.Label>
                    <Form.Control type="text" placeholder={country_of_studies} disabled/>
                </Form.Group> 
            </Row>
            
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Εκπαιδευτικό Ίδρυμα</Form.Label>
                    <Form.Control placeholder={university} disabled/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Τύπος Εκπαιδευτικού Ιδρύματος</Form.Label>
                    <Form.Control placeholder={university_type} disabled/>
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{"float": "left"}}>Τίτλος Σπουδών</Form.Label>
                    <Form.Control type="text" placeholder={title_of_studies} disabled/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Ημερομηνία Εγγραφής</Form.Label>
                    <Form.Control placeholder={sign_in_date} disabled/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Ημερομηνία Αποφοίτησης</Form.Label>
                    <Form.Control placeholder={date_of_graduation} disabled/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>ECTS</Form.Label>
                    <Form.Control placeholder={credits} disabled/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{"float": "left"}}>Διάρκεια Σπουδών (σε χρόνια)</Form.Label>
                    <Form.Control type="text" placeholder={years_of_studies} disabled/>
                </Form.Group>
            </Row>


            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Αντιστοιχεία και Ισοτιμία με Εκπαιδευτικό Ίδρυμα</Form.Label>
                    <Form.Control placeholder={university_department_of_choice} disabled/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Σχόλια προς τον Αιτούντα</Form.Label>
                    <Form.Control as="textarea" rows={3}  onChange={(e) => getNotes(e.target.value)} />
                </Form.Group>
            </Row>

            <br/>
            { email != null && (
                <div  className="button-container"> 
            
                <Button onClick={(e) => {reject(e)}} id="application-buttons" variant="danger">Απόρριψη</Button>{' '} &nbsp;
                <Button onClick={(e) => {UpdateNotes(e)}} id="application-buttons" variant="primary">Ενημέρωση</Button>{'  '}&nbsp;
                <Button onClick={(e) => {submit(e)}} id="application-buttons" variant="success">Αποδοχή</Button>{'   '}
                </div>
            )}
        </div>
    </div>
    </div>
    );
}