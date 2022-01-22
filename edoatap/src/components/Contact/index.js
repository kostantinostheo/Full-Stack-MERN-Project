import React from 'react'
import {Form, Button, Alert, Breadcrumb, Row, Col } from 'react-bootstrap'
import { BsCalendarDate } from 'react-icons/bs'
import './index.css'

export default function Contact(){
  return(
    <div>
        <Alert variant="danger" style={{"paddingLeft": "10em" , "paddingRight" : "10em"}}>
        <Alert.Heading style={{"fontSize": "20px"}}>Προσοχή!</Alert.Heading>
        <p style={{"textAlign": "justify", "fontSize": "14px"}}>
        Σας ενημερώνουμε ότι σύμφωνα με τον χάρτη υγειονομικής ασφάλειας και προστασίας 
        από τη λοίμωξη Covid–19 της Γενικής Γραμματείας Πολιτικής Προστασίας <a href='https://covid19.gov.gr/'>(https://covid19.gov.gr/)</a> 
        και έχοντας υπόψη τα έκτακτα μέτρα προστασίας που λαμβάνονται για προστασία της δημόσιας υγείας,
        η εξυπηρέτηση των ασφαλισμένων γίνεται μετά από τον καθορισμό ραντεβού.
        </p>
        <p style={{"textAlign": "justify", "fontSize": "14px"}}>
            Απο <b>Δευτέρα 8/11/2021</b>, οι πολίτες που θα προσέρχονται στον ΔΟΑΤΑΠ για να εξυπηρετηθούν, θα πρέπει να επιδεικνύουν:
            <ul>
                <li><b>Πιστοποιητικό εμβολιασμού</b> ή <b>νόσησης</b> ή <b>αρνητικό rapid test</b> ή <b>αρνητικό μοριακό (PCR) τέτσ</b> και</li>
                <li><b>ταυτότητα</b> ή <b>διαβατήριο</b></li>
            </ul>
        </p>
      </Alert>
      <Breadcrumb style={{"fontSize": "small" ,"paddingLeft": "10em", "marginBottom" : "4em"}}>
        <Breadcrumb.Item href='/'>Αρχική Σελίδα</Breadcrumb.Item>
        <Breadcrumb.Item active>Επικοινωνία</Breadcrumb.Item>
      </Breadcrumb>
      <div className='info-box'>
        <h5 id='first-header'> <b><u>Ημέρες και ώρες εξυπηρέτησης κοινού</u></b> </h5>
        <Row className='info'>
            <Col xs={7}>
                <ol>
                    <li id='to-do'>
                        Τηλεφωνική εξυπηρέτηση του κοινού πραγματοποιείται απο <b>Δευτέρα έως Παρασκευή</b>, ώρες <b>12:30-14:00</b>: <br/>
                        καλώντας τον αριθμό <b>210-5281000</b> για <b>Αθήνα</b> και <br/>
                        <b>2313-501372, 2313-501106, 2313-501315</b> για <b>Θεσσαλονίκη</b>
                    </li>
                    <li id='to-do'>
                        Δια ζώσης εξυπηρέτηση του κοινού πραγματοποιείται απο <b>Δευτέρα έως Πέμπτη</b>, ώρες <b>9:00-12:00</b>: <br/>
                    </li>
                    <li id='to-do'>
                        Οι πολίτες μπορούν να επικοινωνήσουν για πληροφόρηση μέσω ηλεκτρονικού ταχυδρομείου (<u>inforamtion_dep@doatap.gr</u>)
                    </li>
                </ol>
            </Col>
            <Col>
                <Button className='onliine-date'>
                    Προγραμματισμός ραντεβού &nbsp;&nbsp;
                    <BsCalendarDate size={30}/>
                </Button>
            </Col>
        </Row>
      </div>
      
      <h5 id='first-header' style={{"marginLeft" : "5em", "marginTop": "2em", "marginBottom": "2em"}}> <b><u>Επικοινωνία με ΔΟΑΤΑΠ</u></b> </h5>
        <Form className='form-email'>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Όνομα</Form.Label>
                <Form.Control type="text" placeholder="Όνομα" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Επώνυμο</Form.Label>
                <Form.Control type="text" placeholder="Επώνυμο" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Επιλογή διεύθυνσης</Form.Label>
            <Form.Select aria-label="Default select example">
                <option>Διεύθυνση</option>
                <option value="1">Επικοινωνία με τη Διεύθυνση Αναγνώρισης Ακαδημαϊκών Τίτλων</option>
                <option value="2">Επικοινωνία με τη Διεύθυνση Ενημέρωσης</option>
                <option value="2">Επικοινωνία με τη Διεύθυνση Διοικητικών και Οικονομικών Υπηρεσιών</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Μήνυμα</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder="Το μήνυμα σας..."  />
            </Form.Group>
            <Form.Group className="mb-2" style={{"paddingBottom" : "30px"}}>
                <Form.Control id="send-msg"  type="submit" value="Αποστολή"/>
            </Form.Group>
        </Form>
    </div>
  );
}
