import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {ButtonGroup, Modal, Form, Row , Col, Navbar, Button, Table} from 'react-bootstrap'
import base64 from 'base-64';
import { ConvertToLocalDate, decodeToken } from '../../utils/Common'
import { X , PlusCircle, Trash } from 'react-bootstrap-icons'
import './index.css'

export default function Dashboard()
{
    //User 
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
    const [applicationResults, getApplicationResults] = useState([]);
    const [applicationType, setApplicationType] = useState([]);
    const [applicationDate, setApplicationDate] = useState([]);

    const history = useNavigate()
    
    let decodedToken
    let [i, setI] = useState();
    const [applicationNum, setApplicationNum] = useState();
    const [modalShow, setModalShow] = React.useState(false);
    const [dataParce, setDataParse] = useState();

 

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
        let decode = decodeToken(token)

        if(token && decode.status == "user"){
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
            if(!token)
                window.location.href = '/login'
            else if(token && decode.status == "admin")
                window.location.href = '/'
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
                <Form.Control type="text" placeholder={phone} disabled={true}/>
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
        <br/>
        <Row id="applications-label">
            <Col><h4><b>Αιτήσεις</b></h4></Col>
            <Col><Button href="/nea-aitisi" style={{"float" : "right"}}><PlusCircle/> Δημιουργία Νέας Αίτησης</Button></Col>
        </Row>
        <div className="user-applicatio-table">
        <Table  striped bordered hover size="sm">
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
                    <Button className="but-table-preview" onClick={() => {setModalShow(true); setDataParse(index[i])}}>Προβολή</Button>
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
                    <Button className="but-table-preview" onClick={() => {setModalShow(true); setDataParse(index[i+1])}} >Προβολή</Button>
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
                    <Button className="but-table-preview" onClick={() => {setModalShow(true); setDataParse(index[i+2])}}>Προβολή</Button>
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
                    <Button className="but-table-preview" onClick={() => {setModalShow(true); setDataParse(index[i+3])}}>Προβολή</Button>
                </td>
                </tr>
            </tbody>
        </Table>
        <div>
        { applicationNum > 4 && applicationNum > i+4 && 
        (
            <Button className="change-page" style={{"float" : "right"}} onClick={NextPage} >Επόμενη</Button>
        )
        }
        { applicationNum > 4 && i >=4 &&
            (<Button className="change-page" style={{"float" : "left"}} onClick={PrevPage}>Προηγούμενη</Button>)
        }
        </div>
        </div>
        <DataModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={dataParce}
        />
    </div>
    );
}




function DataModal(props) {
    
    const _application_id = props.id
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

    async function fetchApplicationData(){
        let str_ap_id = _application_id.toString()
        const res = await fetch(`http://localhost:3000/applications/api/appid/${str_ap_id}`)
        const data = await res.json()
        setApplicationData(data)
    }

    function setApplicationData(data){
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
        getNotes(data.notes)
    }

    async function UpdateApplication(event){
        let str_ap_id = _application_id.toString()
        event.preventDefault()
        try {
            await fetch(`http://localhost:3000/applications/api/update/${str_ap_id}`, {
            method: 'PATCH',
            headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: temp_status,
                    result: temp_result,
                    type_of_studies: type_of_studies,
                    country_of_studies: country_of_studies,
                    university: university,
                    university_type: university_type,
                    title_of_studies: title_of_studies,
                    credits: credits,
                    sign_in_date: sign_in_date,
                    date_of_graduation: date_of_graduation,
                    years_of_studies: years_of_studies,
                    university_department_of_choice: university_department_of_choice
                }),
            })
        } catch (error) {
            console.log(error)
        }   
        
        alert('Επιτυχής Αλλαγή Στοιχείων Αίτησης')
        window.location.href = '/dashboard'
    }

    const [state , setState] = useState()
    


    const activeState = () => {
        const temp = false
        setState(temp)
    }
    const disableState = () => {
        const temp = true
        setState(temp)
    }
   
    if(props.show){
        //setState(true)
        fetchApplicationData()
    }
    function isNullorEmpty(){
        if(type_of_studies== null || country_of_studies == null || 
        university == null || university_type == null || title_of_studies == null || credits == null || 
        years_of_studies == null || university_department_of_choice == null)
            return true
        else
            return false
    }
    async function saveApplicationData(event){
        if(!isNullorEmpty()){
            alert("Παρακαλώ συμπληρώστε όλα τα πεδία της αίτησης")
        }    
        else{
            if (window.confirm('Θέλετε να κάνετε προσωρινή αποθήκευση της αίτησης σας;')) {
                temp_status = "Αποθηκευμένη"
                temp_result = "-"
                await UpdateApplication(event)
            } else {
                return
            }
        }
    }

    async function submitApplication(event){
        if(isNullorEmpty()){
            console.log(type_of_studies)
            alert("Παρακαλώ συμπληρώστε όλα τα πεδία της αίτησης")
        }
        else{
            if (window.confirm('Θέλετε να κάνετε οριστική υποβολή της αίτησης σας;\nΗ πράξη αυτή δεν μπορεί να αλλάξει.')) {
                temp_status = "Οριστικοποιημένη"
                temp_result = "Υπο Επεξεργασία"
                await UpdateApplication(event)
            } else {
                return
            }
        }
    }

    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Αίτηση #{_application_id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="application-data-form">
            <h5>Γενικές πληροφορίες:</h5> <br/>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Κατάσταση Αίτησης</Form.Label>
                <Form.Control placeholder={application_status} disabled={state} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Είδος Αίτησης</Form.Label>
                <Form.Control placeholder={application_type} disabled={state} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Αίτησης</Form.Label>
                <Form.Control placeholder={application_date} disabled={state} />
            </Form.Group>
            </Row>
            <h5>Ειδικές πληροφορίες:</h5> <br/>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Είδος Σπουδών</Form.Label>
                <Form.Control type="text" placeholder={type_of_studies} disabled={state}  onChange={(e) => setType_of_studies(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Χώρα Σπουδών</Form.Label>
                <Form.Control type="text" placeholder={country_of_studies} disabled={state} onChange={(e) => set_country_of_studies(e.target.value)}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Εκπαιδευτικό Ίδρυμα</Form.Label>
                <Form.Control placeholder={university} disabled={state} onChange={(e) => set_university(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Τύπος Εκπαιδευτικού Ιδρύματος</Form.Label>
                <Form.Control placeholder={university_type} disabled={state} onChange={(e) => set_university_type(e.target.value)}/>
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Τίτλος Σπουδών</Form.Label>
                <Form.Control type="text" placeholder={title_of_studies} disabled={state} onChange={(e) => set_title_of_studies(e.target.value)}/>
            </Form.Group>

            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Εγγραφής</Form.Label>
                <Form.Control placeholder={sign_in_date} disabled={state}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Αποφοίτησης</Form.Label>
                <Form.Control type="text" placeholder={date_of_graduation} disabled={state}/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>ECTS</Form.Label>
                <Form.Control placeholder={credits} disabled={state} onChange={(e) => set_credits(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Διάρκεια Σπουδών (σε χρόνια)</Form.Label>
                <Form.Control type="text" placeholder={years_of_studies} disabled={state} onChange={(e) => set_years_of_studies(e.target.value)}/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Αντιστοιχεία και Ισοτιμία με Εκπαιδευτικό Ίδρυμα</Form.Label>
                <Form.Control type="text" placeholder={university_department_of_choice} disabled={state} onChange={(e) => set_university_department_of_choice(e.target.value)}/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Σχόλια Φορέα</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder={notes} disabled />
                </Form.Group>
            </Row>
        </div>
        </Modal.Body>
        <Modal.Footer>
            {
                application_status === "Αποθηκευμένη" && (
                    <div className="right-float"> 
                        <ButtonGroup aria-label="Basic example">
                            {state===false && <Button  className="right-float" variant="primary" onClick={(e)=> {saveApplicationData(e)}}>Αποθήκευση Αλλαγών</Button>}&nbsp;&nbsp;&nbsp;&nbsp;
                            {state===false && <Button  className="right-float" variant="success" onClick={(e)=> {submitApplication(e)}} >Οριστική Υποβολή</Button>}&nbsp;&nbsp;&nbsp;&nbsp;
                            { state===false && <Button className="right-float" variant="secondary" onClick={() => disableState()}><X/></Button>}&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="right-float" variant="warning" onClick={() => activeState()} >Επεξεργασία</Button>
                        </ButtonGroup>
                    </div>
                )
            }
        </Modal.Footer>
      </Modal>
    );
  }