import './index.css'
import React from 'react';
import { Accordion, Tabs, Tab, Breadcrumb } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function ApplicationInfo() {
  return (
      <div >
        <Breadcrumb style={{"fontSize": "small" ,"paddingLeft": "10em" , "paddingTop" : "2em"}}>
            <Breadcrumb.Item href='/'>Αρχική Σελίδα</Breadcrumb.Item>
            <Breadcrumb.Item active>Οδηγός Αιτήσεων</Breadcrumb.Item>
        </Breadcrumb>
        <Tabs style={{"backgroundColor" : "rgb(245, 245, 245)"}}  defaultActiveKey="1" className="mb-3" >
            <Tab id='tabs-top' eventKey="1" title="Αναγνώριση Διδακτικού Τίτλου:">
                <div className="title">
                    <h5>Διαδικασία Υποβολής:</h5>
                </div>
                <div className='video'>
                    <ReactPlayer  url='https://www.youtube.com/watch?v=CfPxlb8-ZQ0&ab_channel=Musictag' />
                </div>
                <div className="title">
                    <h5>Υποχρεωτικά Δικαιολογητικά:</h5>
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Παράβολο</Accordion.Header>
                        <Accordion.Body>
                        Παράβολο 184,32€ (180€ + 2%χαρτ. + 20%ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
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
                </Accordion>
                
                <div className="title">
                    <h5>Προαιρετικά Δικαιολογητικά:</h5>
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Βεβαίωση Υποτροφίας</Accordion.Header>
                        <Accordion.Body>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
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
            </Tab>
            <Tab eventKey="2" title="Αναγνώριση Μεταπτυχιακού Τίτλου">
            <div className="title">
                    <h5>Διαδικασία Υποβολής:</h5>
                </div>
                <div className='video'>
                    <ReactPlayer  url='https://www.youtube.com/watch?v=CfPxlb8-ZQ0&ab_channel=Musictag' />
                </div>
                <div className="title">
                    <h5>Υποχρεωτικά Δικαιολογητικά:</h5>
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Παράβολο</Accordion.Header>
                        <Accordion.Body>
                        Παράβολο 184,32€ (180€ + 2%χαρτ. + 20%ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
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
                </Accordion>
                
                <div className="title">
                    <h5>Προαιρετικά Δικαιολογητικά:</h5>
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Βεβαίωση Υποτροφίας</Accordion.Header>
                        <Accordion.Body>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
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
            </Tab>
            <Tab id="tabs-top" eventKey="3" title="Αναγνώριση Βασικού Τίτλου">
                <div className="title">
                    <h5>Διαδικασία Υποβολής:</h5>
                </div>
                <div className='video'>
                    <ReactPlayer  url='https://www.youtube.com/watch?v=CfPxlb8-ZQ0&ab_channel=Musictag' />
                </div>
                <div className="title">
                    <h5>Υποχρεωτικά Δικαιολογητικά:</h5>
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Παράβολο</Accordion.Header>
                        <Accordion.Body className='accordion-body'>
                        Παράβολο 184,32€ (180€ + 2%χαρτ. + 20%ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
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
                </Accordion>
                
                <div className="title">
                    <h5>Προαιρετικά Δικαιολογητικά:</h5>
                </div>

                <Accordion id='site-info' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-title'>Βεβαίωση Υποτροφίας</Accordion.Header>
                        <Accordion.Body>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
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
            </Tab>
        </Tabs>
    </div>

  );
}