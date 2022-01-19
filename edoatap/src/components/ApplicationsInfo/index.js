import './index.css'
import React from 'react';
import { ListGroup, Accordion, Tabs, Tab, Breadcrumb } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { ArrowRight, Dot } from 'react-bootstrap-icons'
export default function ApplicationInfo() {
  return (
      <div >
        <Breadcrumb style={{"fontSize": "small" ,"paddingLeft": "10em" , "paddingTop" : "2em"}}>
            <Breadcrumb.Item href='/'>Αρχική Σελίδα</Breadcrumb.Item>
            <Breadcrumb.Item active>Οδηγός Αιτήσεων</Breadcrumb.Item>
        </Breadcrumb>
                <div className="header">
                    <h3>Οδηγός Αιτήσεων</h3>
                </div>

                <h5 id="aco-title" style={{"width" : "60%" , "marginLeft":"auto", "marginRight": "auto"}}>Πως να αναγνωρίσετε το πτυχίο σας:</h5>
                <div className="listgroup" id='site-info'>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li" id="text">Συνδεθείτε στον προσωπικό σας <a href="/login">λογαριασμό</a> eDoatap. Αν δεν έχετε λογαριασμό στον eDoatap
                    δημιουργήστε εύκολα έναν πατώντας <a href="/register">εδώ</a> ή συδεθείτε με τους κωδικούς <a href="/login" style={{"color" : "rgb(255, 210, 61)", "textDecoration": "none"}}>TAXISNET</a>.</ListGroup.Item>
                    <ListGroup.Item as="li" id="text">Πλοηγηθείτε στο πάνω μέρος της σελίδας στις <b>Αιτήσεις <ArrowRight/> Δημιουργία νέας αίτησης</b>. </ListGroup.Item>
                    <ListGroup.Item as="li" id="text">Θα οδηγηθείτε σε μια νέα σελίδα στην οποία καλείστε να συμπληρώσετε: </ListGroup.Item>
                        <ListGroup as="ol">
                            <ListGroup.Item as="li" id="text"><Dot/>    Tα προσωπικά σας στοιχεία. </ListGroup.Item>
                            <ListGroup.Item as="li" id="text"><Dot/>    Tα στοιχεία του πτυχίου σας. </ListGroup.Item>
                            <ListGroup.Item as="li" id="text"><Dot/>    Να υποβάλεται τα απαραίτητα δικαιολογητικά της αίτησης. </ListGroup.Item>
                        </ListGroup>
                    <ListGroup.Item as="li" id="text">Για την ολοκλήρωση της αίτησης και την οριστική υποβολή της θα χρειαστεί η πληρωμή παράβολου.</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="title">
                    <h6 style={{"width" : "89%" , "marginLeft":"auto", "marginRight": "auto"}} id="aco-title">Βοηθητικό βίντεο συμπλήρωσης αίτησης:</h6>
                </div>
                <div className='video'>
                    <ReactPlayer  url='https://www.youtube.com/watch?v=CfPxlb8-ZQ0&ab_channel=Musictag' />
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <h5 id="aco-title">Υποχρεωτικά Δικαιολογητικά:</h5>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Παράβολο</Accordion.Header>
                        <Accordion.Body>
                        Παράβολο 184,32€. 
                        <ul>
                            <li>
                                Πληρωμή με χρήση πιστωτικής/χρεωστικής κάρτας μετά την τελική υποβολή της αίτησης.
                            </li>
                            <li>
                            Το ποσό κατατίθεται στην Τράπεζα της Ελλάδος (αριθμ. Λογαριασμού του Δ.Ο.Α.Τ.Α.Π.)
                            <b>26072595</b>,<b>ΙΒΑΝ: GR05 0100 0240 0000 0002 6072 595)</b>.        
                            </li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Αντίγραφο Ταυτότητας ή Διαβατηρίου</Accordion.Header>
                        <Accordion.Body>
                        Ταυτότητα ή διαβατήριο σε ευκρινές φωτοαντίγραφο (στη περίπτωση ταυτότητας ή διαβατηρίου της 
                        αλλοδαπής, ευκρινές φωτοαντίγραφο από το αντίγραφο που έχει επικυρωθεί από δικηγόρο της ημεδαπής)
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Έντυπο Συγκαταθεσης</Accordion.Header>
                        <Accordion.Body>
                        Συμπληρώνεται και υπογράφετραι μόνο από τον ενδιαφερόμενο για κάθε ένα από τα Ιδρύματα όπου σπούδασε
                        και είναι διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap.
                        </Accordion.Body>
                    </Accordion.Item>
                <h5 id="aco-title">Προαιρετικά Δικαιολογητικά:</h5>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className='accordion-title'>Βεβαίωση Υποτροφίας</Accordion.Header>
                        <Accordion.Body>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Ερωτηματολόγιο</Accordion.Header>
                        <Accordion.Body>
                        Στην περίπτωση των εξ αποστάσεως σπουδών, θα αποστέλλεται απευθείας (ταχυδρομικώς ή ηλεκτρονικώς στο
                        protocol_A@doatap.gr) στο Δ.Ο.Α.Τ.Α.Π. από το Ίδρυμα συμπληρωμένο το σχετικό ερωτηματολόγιο, το οποίο είναι
                        διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap.

                        Το έγγραφο αυτό πρέπει να ζητηθεί από τον ίδιο τον ενδιαφερόμενο και να αποσταλεί από το Ίδρυμα απευθείας (
                        ταχυδρομικώς ή ηλεκτρονικώς στο protocol_A@doatap.gr) στον Δ.Ο.Α.Τ.Α.Π. και στον ίδιο, και να επισυναφθεί στην 
                        αίτηση το απεσταλμένο αρχείο, ώστε να γίνει η αντιπαραβολή των εγγράφων από τον Δ.Ο.Α.Τ.Α.Π. 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
    </div>

  );
}