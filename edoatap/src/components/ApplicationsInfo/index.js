import './index.css'
import React from 'react';
import { ListGroup, Accordion, Tabs, Tab, Breadcrumb } from 'react-bootstrap'
import ReactPlayer from 'react-player'

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
                <div className="title">
                    <h5 id="aco-title">Πως να αναγνωρίσετε το πτυχίο σας:</h5>
                </div>
                <div className="listgroup">
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li" id="text">Συνδεθείτε στον προσωπικό σας λογαριασμό eDoatap. Αν δεν έχετε λογαριασμό
                     πατήστε <a href="/register">εδώ</a> για να δημιουργήσετε.</ListGroup.Item>
                    <ListGroup.Item as="li" id="text">Πλοηγηθείτε στο πάνω μέρος της σελίδας στις Αιτήσεις -> Δημιουργία νέας αίτησης
                     και πατήστε πάνω</ListGroup.Item>
                    <ListGroup.Item as="li" id="text">Θα οδηγηθείτε σε μια νέα σελίδα στην οποία καλείστε να συμπληρώσετε τα προσωπικά
                     σας στοιχεία όπως και τα στοιχεία του πτυχίου σας</ListGroup.Item>
                  </ListGroup>
                </div>
                <div className="title">
                    <h5 id="aco-title">Βοηθητικό βίντεο:</h5>
                </div>
                <div className='video'>
                    <ReactPlayer  url='https://www.youtube.com/watch?v=CfPxlb8-ZQ0&ab_channel=Musictag' />
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <h5 id="aco-title">Υποχρεωτικά Δικαιολογητικά:</h5>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Παράβολο</Accordion.Header>
                        <Accordion.Body>
                        Παράβολο 184,32€ (180€ + 2% χαρτ. + 20% ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
                        τίτλο σπουδών. Το ποσό κατατίθεται μόνο στην Τράπεζα της Ελλάδος (αριθμ. Λογαριασμού του Δ.Ο.Α.Τ.Α.Π.)
                        26072595, ΙΒΑΝ: GR05 0100 0240 0000 0002 6072 595). Στο αποδεικτικό κατάθεσης θα πρέπει να αναφέρεται
                        ως καταθέτης ο πολίτης που υποβάλλει την αίτηση αναγνώρισης. Αναλυτικές πληροφορίες μπορείτε να βρείτε
                        στο ιστότοπο του Οργανισμού www.doatap.gr 
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
                        και είναι διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap. Με το έντυπο αυτό, 
                        εξουσιοδοτείται ο Δ.Ο.Α.Τ.Α.Π. να ζητά από το/τα Ιδρύματα διευκρινιστικά/συμπληρωματικά στοιχεία που 
                        αφορούν τον/τους τίτλο/ους σπουδών του.
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