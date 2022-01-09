import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='column'>
        <b>Επικοινωνία</b>
        <b>Δ.Ο.Α.Τ.Α.Π</b>
        Αγίου Κωνσταντίνου 54,<br />
        Τ.Κ. 104 37, Αθήνα<br />
        Τηλέφωνο 210-5281000<br /><br />
        <b>Δ.Ο.Α.Τ.Α.Π Θεσσαλονίκη</b>
        Υπουργείο Μακεδονίας Θράκης - Διοικητήριο,<br />
        Τ.Κ. 541 23 Θεσσαλονίκη<br />
        Τηλέφωνο: 2313-501372
      </div>
      <div className='column'>
        <b>Ενημέρωση</b><br />
        <a href="/">Συχνές Ερωτήσεις</a><br />
        <a href="/">Φόρμα επικοινωνίας - Σχολίων -<br /> Υποδείξεων</a>
      </div>
      <div className='column'>
        <b>Όροι & Ιδιωτικότητα</b><br />
        <a href="/">Όροι Χρήσης - Δήλωση Απορρήτου<br /></a><br />
        <a href="/">Πολιτική  Cookies</a>
      </div>
    </div>
  );
}
