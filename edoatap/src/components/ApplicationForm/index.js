import React, { useEffect, useRef, useState } from "react";
import {BrowserRouter, useNavigate} from 'react-router-dom'
import { Modal ,DropdownButton, Dropdown,  ButtonGroup, Form, Row , Col, Navbar, Button, Table} from 'react-bootstrap'
import Files from 'react-files'
import { universitiesList, ConvertToLocalDate, getToken, decodeToken } from '../../utils/Common'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css'

export default function ApplicationForm()
{
    //User data
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
    const [application_id, set_application_id] = useState()
    let status
    let result
    const [application_type, setApplication_type] = useState()
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


    const history = useNavigate()
    
    let decodedToken 

    async function getUserData(){
        const res = await fetch(`http://localhost:3000/users/${decodedToken.user_id}`)
        const data = await res.json()
        await setProfile(data)
    }

    
    async function submitForm(event){

        event.preventDefault()
        await fetch(`http://localhost:3000/applications/api/submit`, {
        method: 'POST',
        headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id,
                status,
                result,
                application_type,
                type_of_studies,
                country_of_studies,
                university,
                university_type,
                title_of_studies,
                credits,
                sign_in_date,
                date_of_graduation,
                years_of_studies,
                university_department_of_choice,

            }),
        })
        window.location.href = '/dashboard'
    }

    function isNullorEmpty(){
        if(user_id == null || application_type== null ||
        type_of_studies== null || country_of_studies == null || 
        university == null || university_type == null || title_of_studies == null || credits == null || 
        sign_in_date == null || date_of_graduation == null || years_of_studies == null || university_department_of_choice == null)
            return true
        else
            return false
    }

    async function submit(event){
        if(isNullorEmpty())
            alert("Παρακαλώ συμπληρώστε όλα τα πεδία της αίτησης")
        else{
            if (window.confirm('Θέλετε να κάνετε οριστική υποβολή της αίτησης σας;\nΗ πράξη αυτή δεν μπορεί να αλλάξει.')) {
                status = "Οριστικοποιημένη"
                result = "Υπο Επεξεργασία"
                await submitForm(event)
            } else {
                return
            }
        }
    }
    async function save(event){
        if(application_type == null)
            alert("Παρακαλώ συμπληρώστε όλα τα πεδία της αίτησης")
        else{
            if (window.confirm('Θέλετε να κάνετε προσωρινή αποθήκευση της αίτησης σας;')) {
                status = "Αποθηκευμένη"
                result = "-"
                await submitForm(event)
            } else {
                return
            }
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

    const[filename , getFileName] = useState()
    function onFilesChange(files) {
        console.log(files[0])
        
        getFileName(files[0].name)
    }
    
    function onFilesError(error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }


   useEffect(()=> {
        const token = getToken()
        if(token){
            decodedToken = decodeToken(token);
            if(!decodedToken){
                localStorage.removeItem('token')
                history.reaplace('/login')
            }else{
                setId(decodedToken.user_id)
                console.log(user_id)
                getUserData()
            }
        }
        else{
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    },[])

    return(
    <div>
        <br/>
        <div className="form-title">
          <h3><b><u>Δημιουργία Νέας Αίτησης</u></b></h3>
        </div>
        <Row id="user-details-label">
            <h4><b>Προσωπικά Στοιχεία</b></h4>
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
                <Form.Control type="text" placeholder={phone} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Κινητό</Form.Label>
                <Form.Control type="text" placeholder={mobile} />
                </Form.Group>
            </Row>
            <Row className="mb-1">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Διεύθυνση</Form.Label>
                    <Form.Control placeholder={address}  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Πόλη</Form.Label>
                    <Form.Control placeholder={city}  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={{"float": "left"}}>Τ.Κ.</Form.Label>
                    <Form.Control placeholder={city_id}  />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Αριθμός Δ.Τ.</Form.Label>
                <Form.Control type="text" placeholder={_id_number} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Έκδουσα Αρχή</Form.Label>
                <Form.Control type="text" placeholder={_id_city} />
                </Form.Group>
            </Row>
        </div>

        <br/>

        <Row id="user-details-label">
          <h4><b>Πληροφορίες Αίτησης</b></h4>
        </Row><br/>
        <div className="user-data-form">
        <Form.Group as={Col} className="mb-3">
            <Row>
            <Form.Label  style={{"textAlign": "left"}}>Είδος Αίτησης</Form.Label>
            </Row>
            <Row>
            <DropdownButton  onSelect={(e)=>setApplication_type(e)} id="button-uni" title={application_type == null ? "Επιλογη Τύπου" : application_type}>
                <Dropdown.Item eventKey="Αναγνώρισης" id="button-sel-uni" >Αναγνώρισης</Dropdown.Item>
                <Dropdown.Item eventKey="Αναγνώρισης και Ισοτιμίας" id="button-sel-uni" >Αναγνώρισης και Ισοτιμίας</Dropdown.Item>
            </DropdownButton>
            </Row>
        </Form.Group>

        </div>

        <div className="user-data-form"> 
            <Row className="mb-3">
                <Row as={Col} className="drop-uni-row">
                    <Form.Label style={{"textAlign": "left"}}>Είδος Σπουδών</Form.Label>
                    <DropdownButton onSelect={(e)=> setType_of_studies(e)} id="button-uni" title={type_of_studies == null ? "Επιλογη Τύπου" : type_of_studies}>
                        <Dropdown.Item eventKey="Δια ζώσης" id="button-sel-uni" >Δια ζώσης</Dropdown.Item>
                        <Dropdown.Item eventKey="Εξ αποστάσεως" id="button-sel-uni" >Εξ' αποστάσεως</Dropdown.Item>
                    </DropdownButton>
                </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{"float": "left"}}>Χώρα Σπουδών</Form.Label>
                <Form.Control type="text" placeholder={country_of_studies} onChange={ (e) => set_country_of_studies(e.target.value) }/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Εκπαιδευτικό Ίδρυμα</Form.Label>
                <Form.Control placeholder={university} onChange={(e) => set_university(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Τύπος Εκπαιδευτικού Ιδρύματος</Form.Label>
                <Form.Control placeholder={university_type} onChange={(e) => set_university_type(e.target.value)} />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Τίτλος Σπουδών</Form.Label>
                <Form.Control type="text" placeholder={title_of_studies} onChange={(e) => set_title_of_studies(e.target.value)}/>
            </Form.Group>

            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Εγγραφής</Form.Label>
                <DatePicker className='date-picker' selected={sign_in_date} onChange={(e) => set_sign_in_date(e)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Ημερομηνία Αποφοίτησης</Form.Label>
                <DatePicker className='date-picker' selected={date_of_graduation} onChange={(e) => set_date_of_graduation(e)} />
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
                <Form.Label style={{"float": "left"}}>ECTS</Form.Label>
                <Form.Control placeholder={credits} onChange={(e) => set_credits(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{"float": "left"}}>Διάρκεια Σπουδών (σε χρόνια)</Form.Label>
                <Form.Control type="text" placeholder={years_of_studies} onChange={(e) => set_years_of_studies(e.target.value)}/>
            </Form.Group>
            </Row>
            <Row className="drop-uni-row">
            <Form.Label style={{"textAlign": "left"}}>Αντιστοιχεία και Ισοτιμία με Εκπαιδευτικό Ίδρυμα</Form.Label>
            <DropdownButton onSelect={(e)=> set_university_department_of_choice(e)} id="button-uni" title={university_department_of_choice == null ? "Επιλογή Εκπαιδευτικού Ιδρύματος" : university_department_of_choice}>
                {universitiesList.map((item,index)=>{
                    return <Dropdown.Item eventKey={item} id="button-sel-uni" >{item}</Dropdown.Item>
                })}
            </DropdownButton>
            </Row>
            <br/>
            <Row id="user-details-label" style={{"width" : "100%"}}>
                <h4><b>Υποβολή Δικαιολογητικών</b></h4>
            </Row><br/>
        <div className="files">
        <Files
          className='files-dropzone'
          onChange={(e)=> onFilesChange(e)}
          onError={(e)=> onFilesError(e)}
          accepts={['image/png', '.pdf']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable>
          Drop files here or click to upload
        </Files>        
        </div>
        <h6 style={{"textAlign": "left", "color":"blue", "paddingTop": "3px"}}>{filename}</h6>
        <div  className="button-container">
            <Button href='/dashboard' id="application-buttons" style={{"backgroundColor": "rgb(211, 89, 61)", "border": "solid 1px rgb(211, 89, 61)"}}>Ακύρωση</Button>{'  '}
            <Button onClick={(e) => { save(e) }} id="application-buttons" variant="primary">Προσωρινή Αποθήκευση</Button>{'  '}
            <Button onClick={(e) => { submit(e) }} id="application-buttons" variant="success">Υποβολή</Button>{'   '}
        </div>
      </div>
    </div>
    );
}