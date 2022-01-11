import './index.css'
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import BreadPath from '../BreadPath';

export default function ApplicationInfo() {
  return (
      <div>
        <BreadPath/>    
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Αναγνώριση Διδακτικού Τίτλου:" title="Αναγνώριση Διδακτικού Τίτλου:">
                <div className="title">
                    <h4>Διαδικασία Υποβολής:</h4>
                </div>
                
                <div className="title">
                    <h4>Υποχρεωτικά Δικαιολογητικά:</h4>
                </div>

                <div id='site-info' className='text_info'>
                    <h5>ΠΑΡΑΒΟΛΟ:</h5>
                    <p> 
                        Παράβολο 184,32€ (180€ + 2%χαρτ. + 20%ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
                        τίτλο σπουδών. Το ποσό κατατίθεται μόνο στην Τράπεζα της Ελλάδος (αριθμ. Λογαριασμού του Δ.Ο.Α.Τ.Α.Π.)
                        26072595, ΙΒΑΝ: GR05 0100 0240 0000 0002 6072 595). Στο αποδεικτικό κατάθεσης θα πρέπει να αναφέρεται
                        ως καταθέτης ο πολίτης που υποβάλλει την αίτηση αναγνώρισης. Αναλυτικές πληροφορίες μπορείτε να βρείτε
                        στο ιστότοπο του Οργανισμού www.doatap.gr 
                    </p> 

                    <h5>ΑΝΤΙΓΡΑΦΟ ΤΑΥΤΟΤΗΤΑΣ Ή ΔΙΑΒΑΤΗΡΙΟΥ:</h5>
                    <p> 
                        Ταυτότητα ή διαβατήριο σε ευκρινές φωτοαντίγραφο (στη περίπτωση ταυτότητας ή διαβατηρίου της 
                        αλλοδαπής, ευκρινές φωτοαντίγραφο από το αντίγραφο που έχει επικυρωθεί από δικηγόρο της ημεδαπής)
                    </p> 

                    <h5>ΕΝΤΥΠΟ ΣΥΓΚΑΤΑΘΕΣΗΣ:</h5>
                    <p> 
                        Συμπληρώνεται και υπογράφετραι μόνο από τον ενδιαφερόμενο για κάθε ένα από τα Ιδρύματα όπου σπούδασε
                        και είναι διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap. Με το έντυπο αυτό, 
                        εξουσιοδοτείται ο Δ.Ο.Α.Τ.Α.Π. να ζητά από το/τα Ιδρύματα διευκρινιστικά/συμπληρωματικά στοιχεία που 
                        αφορούν τον/τους τίτλο/ους σπουδών του.
                    </p>      
                </div>  
                <div className="title">
                    <h4>Προαιρετικά Δικαιολογητικά:</h4>
                </div>
                <div id='site-info' className='text_info'>
                    <h5>ΒΕΒΑΙΩΣΗ ΥΠΟΤΡΟΦΙΑΣ:</h5>
                    <p>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                    </p>
                    <h5>ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ</h5>
                    <p>
                            Στην περίπτωση των εξ αποστάσεως σπουδών, θα αποστέλλεται απευθείας (ταχυδρομικώς ή ηλεκτρονικώς στο
                            protocol_A@doatap.gr) στο Δ.Ο.Α.Τ.Α.Π. από το Ίδρυμα συμπληρωμένο το σχετικό ερωτηματολόγιο, το οποίο είναι
                            διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap.

                            Το έγγραφο αυτό πρέπει να ζητηθεί από τον ίδιο τον ενδιαφερόμενο και να αποσταλεί από το Ίδρυμα απευθείας (
                            ταχυδρομικώς ή ηλεκτρονικώς στο protocol_A@doatap.gr) στον Δ.Ο.Α.Τ.Α.Π. και στον ίδιο, και να επισυναφθεί στην 
                            αίτηση το απεσταλμένο αρχείο, ώστε να γίνει η αντιπαραβολή των εγγράφων από τον Δ.Ο.Α.Τ.Α.Π. 
                    </p>
                </div>
            </Tab>
            <Tab eventKey="Αναγνώριση Μεταπτυχιακού Τίτλου" title="Αναγνώριση Μεταπτυχιακού Τίτλου">
            <div className="title">
                    <h4>Διαδικασία Υποβολής:</h4>
                </div>
                
                <div className="title">
                    <h4>Υποχρεωτικά Δικαιολογητικά:</h4>
                </div>

                <div id='site-info' className='text_info'>
                    <h5>ΠΑΡΑΒΟΛΟ:</h5>
                    <p> 
                        Παράβολο 184,32€ (180€ + 2%χαρτ. + 20%ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
                        τίτλο σπουδών. Το ποσό κατατίθεται μόνο στην Τράπεζα της Ελλάδος (αριθμ. Λογαριασμού του Δ.Ο.Α.Τ.Α.Π.)
                        26072595, ΙΒΑΝ: GR05 0100 0240 0000 0002 6072 595). Στο αποδεικτικό κατάθεσης θα πρέπει να αναφέρεται
                        ως καταθέτης ο πολίτης που υποβάλλει την αίτηση αναγνώρισης. Αναλυτικές πληροφορίες μπορείτε να βρείτε
                        στο ιστότοπο του Οργανισμού www.doatap.gr 
                    </p> 

                    <h5>ΑΝΤΙΓΡΑΦΟ ΤΑΥΤΟΤΗΤΑΣ Ή ΔΙΑΒΑΤΗΡΙΟΥ:</h5>
                    <p> 
                        Ταυτότητα ή διαβατήριο σε ευκρινές φωτοαντίγραφο (στη περίπτωση ταυτότητας ή διαβατηρίου της 
                        αλλοδαπής, ευκρινές φωτοαντίγραφο από το αντίγραφο που έχει επικυρωθεί από δικηγόρο της ημεδαπής)
                    </p> 

                    <h5>ΕΝΤΥΠΟ ΣΥΓΚΑΤΑΘΕΣΗΣ:</h5>
                    <p> 
                        Συμπληρώνεται και υπογράφετραι μόνο από τον ενδιαφερόμενο για κάθε ένα από τα Ιδρύματα όπου σπούδασε
                        και είναι διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap. Με το έντυπο αυτό, 
                        εξουσιοδοτείται ο Δ.Ο.Α.Τ.Α.Π. να ζητά από το/τα Ιδρύματα διευκρινιστικά/συμπληρωματικά στοιχεία που 
                        αφορούν τον/τους τίτλο/ους σπουδών του.
                    </p>      
                </div>  
                <div className="title">
                    <h4>Προαιρετικά Δικαιολογητικά:</h4>
                </div>
                <div id='site-info' className='text_info'>
                    <h5>ΒΕΒΑΙΩΣΗ ΥΠΟΤΡΟΦΙΑΣ:</h5>
                    <p>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                    </p>
                    <h5>ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ</h5>
                    <p>
                            Στην περίπτωση των εξ αποστάσεως σπουδών, θα αποστέλλεται απευθείας (ταχυδρομικώς ή ηλεκτρονικώς στο
                            protocol_A@doatap.gr) στο Δ.Ο.Α.Τ.Α.Π. από το Ίδρυμα συμπληρωμένο το σχετικό ερωτηματολόγιο, το οποίο είναι
                            διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap.

                            Το έγγραφο αυτό πρέπει να ζητηθεί από τον ίδιο τον ενδιαφερόμενο και να αποσταλεί από το Ίδρυμα απευθείας (
                            ταχυδρομικώς ή ηλεκτρονικώς στο protocol_A@doatap.gr) στον Δ.Ο.Α.Τ.Α.Π. και στον ίδιο, και να επισυναφθεί στην 
                            αίτηση το απεσταλμένο αρχείο, ώστε να γίνει η αντιπαραβολή των εγγράφων από τον Δ.Ο.Α.Τ.Α.Π. 
                    </p>
                </div>
            </Tab>
            <Tab eventKey="Αναγνώριση Βασικού Τίτλου" title="Αναγνώριση Βασικού Τίτλου">
            <div className="title">
                    <h4>Διαδικασία Υποβολής:</h4>
                </div>
                
                <div className="title">
                    <h4>Υποχρεωτικά Δικαιολογητικά:</h4>
                </div>

                <div id='site-info' className='text_info'>
                    <h5>ΠΑΡΑΒΟΛΟ:</h5>
                    <p> 
                        Παράβολο 184,32€ (180€ + 2%χαρτ. + 20%ΟΓΑ χαρτ.) (ΦΕΚ 3165/Β/30-12-2011),για κάθε κρινόμενο
                        τίτλο σπουδών. Το ποσό κατατίθεται μόνο στην Τράπεζα της Ελλάδος (αριθμ. Λογαριασμού του Δ.Ο.Α.Τ.Α.Π.)
                        26072595, ΙΒΑΝ: GR05 0100 0240 0000 0002 6072 595). Στο αποδεικτικό κατάθεσης θα πρέπει να αναφέρεται
                        ως καταθέτης ο πολίτης που υποβάλλει την αίτηση αναγνώρισης. Αναλυτικές πληροφορίες μπορείτε να βρείτε
                        στο ιστότοπο του Οργανισμού www.doatap.gr 
                    </p> 

                    <h5>ΑΝΤΙΓΡΑΦΟ ΤΑΥΤΟΤΗΤΑΣ Ή ΔΙΑΒΑΤΗΡΙΟΥ:</h5>
                    <p> 
                        Ταυτότητα ή διαβατήριο σε ευκρινές φωτοαντίγραφο (στη περίπτωση ταυτότητας ή διαβατηρίου της 
                        αλλοδαπής, ευκρινές φωτοαντίγραφο από το αντίγραφο που έχει επικυρωθεί από δικηγόρο της ημεδαπής)
                    </p> 

                    <h5>ΕΝΤΥΠΟ ΣΥΓΚΑΤΑΘΕΣΗΣ:</h5>
                    <p> 
                        Συμπληρώνεται και υπογράφετραι μόνο από τον ενδιαφερόμενο για κάθε ένα από τα Ιδρύματα όπου σπούδασε
                        και είναι διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap. Με το έντυπο αυτό, 
                        εξουσιοδοτείται ο Δ.Ο.Α.Τ.Α.Π. να ζητά από το/τα Ιδρύματα διευκρινιστικά/συμπληρωματικά στοιχεία που 
                        αφορούν τον/τους τίτλο/ους σπουδών του.
                    </p>      
                </div>  
                <div className="title">
                    <h4>Προαιρετικά Δικαιολογητικά:</h4>
                </div>
                <div id='site-info' className='text_info'>
                    <h5>ΒΕΒΑΙΩΣΗ ΥΠΟΤΡΟΦΙΑΣ:</h5>
                    <p>
                        Για φοιτητές που έχουν γίνει δεκτοί για μεταπτυχιακές σπουδές στην Ελλάδα απαιτήται βεβαίωση του Ι.Κ.Υ
                        ότι είναι υπότροφοι ή βεβαίωση του Τμήματος του οικείου Πανεπιστημίου ότι έχουν γίνει δεκτοί σε μεταπτυχιακό
                        πρόγραμμα 
                    </p>
                    <h5>ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ</h5>
                    <p>
                            Στην περίπτωση των εξ αποστάσεως σπουδών, θα αποστέλλεται απευθείας (ταχυδρομικώς ή ηλεκτρονικώς στο
                            protocol_A@doatap.gr) στο Δ.Ο.Α.Τ.Α.Π. από το Ίδρυμα συμπληρωμένο το σχετικό ερωτηματολόγιο, το οποίο είναι
                            διαθέσιμο στο σύνδεσμο "Έντυπα - Οδηγίες" της αρχικής σελίδας eDoatap.

                            Το έγγραφο αυτό πρέπει να ζητηθεί από τον ίδιο τον ενδιαφερόμενο και να αποσταλεί από το Ίδρυμα απευθείας (
                            ταχυδρομικώς ή ηλεκτρονικώς στο protocol_A@doatap.gr) στον Δ.Ο.Α.Τ.Α.Π. και στον ίδιο, και να επισυναφθεί στην 
                            αίτηση το απεσταλμένο αρχείο, ώστε να γίνει η αντιπαραβολή των εγγράφων από τον Δ.Ο.Α.Τ.Α.Π. 
                    </p>
                </div>
            </Tab>
        </Tabs>
    </div>

  );
}