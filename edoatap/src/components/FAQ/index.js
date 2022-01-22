import './index.css'
import React from 'react';
import {  Accordion,  Breadcrumb } from 'react-bootstrap'


export default function FAQ() {
    
    
    return (
    <div>
    <Breadcrumb style={{"fontSize": "small" ,"paddingLeft": "10em", "marginBottom" : "2em" , "paddingTop" : "2em"}}>
        <Breadcrumb.Item href='/'>Αρχική Σελίδα</Breadcrumb.Item>
        <Breadcrumb.Item active>Συχνές Ερωτήσεις</Breadcrumb.Item>
    </Breadcrumb>
    <Accordion id='site-info' defaultActiveKey="0">
        <h5 id="aco-title">Συχνές Ερωτήσεις:</h5>
        <Accordion.Item eventKey="0">
            <Accordion.Header className='accordion-title'>Σπούδασα ένα χρόνο στο πρώτο πανεπιστήμιο και μετά έκανα μετεγγραφή στο 2ο έτος στο δεύτερο πανεπιστήμιο. Χρειάζομαι δικαιολογητικά και από τα δύο πανεπιστήμια;</Accordion.Header>
            <Accordion.Body>
                Δικαιολογητικά απαιτούνται από κάθε Ίδρυμα στο οποίο έχει πραγματοποιηθεί μέρος ή το σύνολο των σπουδών. 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Σε πόσο καιρό θα αναγνωριστεί το πτυχίο μου;</Accordion.Header>
            <Accordion.Body>
            Κάθε αίτηση έχει έναν νεκρό χρόνο αναμονής από την υποβολή της μέχρι τον προέλεγχο, που ανέρχεται σήμερα στις 40 ημέρες για όλες τις αιτήσεις οριζόντια.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Θα ειδοποιηθώ όταν ολοκληρωθεί η αναγνώριση και θα μου την στείλετε στην διεύθυνση μου;</Accordion.Header>
            <Accordion.Body>
            Η/ο ενδιαφερόμενη/ος ενημερώνεται για την ολοκλήρωση της διαδικασίας αναγνώρισης του τίτλου του από την υπηρεσία μας με sms ή e-mail ή μπορεί να ενημερωθεί απευθείας απο το προσωπικό του προφίλ.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header className='accordion-title'>Πώς μπορώ να δω την πορεία της αίτησης μου στο site σας;</Accordion.Header>
            <Accordion.Body>
            Η παρακολούθηση της πορείας γίνεται μέσω της πλατφόρμας eDoatap στην οποία και έχει υποβληθεί η αίτηση. Κάντε είσοδο με τα προσωπικά σας στοιχεία και κατευθυνθέιτε στο <b>Προφίλ</b> σας
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Έχω πάρει απορριπτική απόφαση από το ΔΟΑΤΑΠ/ΔΙΚΑΤΣΑ. Μπορώ να κάνω αίτηση επανεξέτασης;</Accordion.Header>
            <Accordion.Body>
                Ναι
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    )
}