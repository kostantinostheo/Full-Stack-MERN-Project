import React from "react";
import { Col, Row } from 'react-bootstrap'
import "./index.css";

export default function Footer() {
  return (
    <div className='footer'>
      <Row className="row-line">
        <Col className="text-size-sm">
            <h5 style={{"color" : "rgb(49, 104, 255)", "paddingBottom":"1em", "textDecoration" : "underline"}}>Επικοινωνία</h5>
            <b>Δ.Ο.Α.Τ.Α.Π</b><br/>
            Αγίου Κωνσταντίνου 54,<br />
            Τ.Κ. 104 37, Αθήνα<br />
            Τηλέφωνο 210-5281000<br /><br />
            <b>Δ.Ο.Α.Τ.Α.Π Θεσσαλονίκη</b><br/>
            Υπουργείο Μακεδονίας Θράκης - Διοικητήριο,<br />
            Τ.Κ. 541 23 Θεσσαλονίκη<br />
            Τηλέφωνο: 2313-501372
        </Col>
        <Col className="text-size-md">
          <h5 style={{"color" : "rgb(49, 104, 255)", "paddingBottom":"1em", "textDecoration" : "underline"}}>Ενημέρωση</h5>
          <a className="links" href="/">Ανακοινώσεις</a><br /><br />
          <a className="links" href="/sixnes-erotisis">Συχνές Ερωτήσεις</a><br /><br />
          <a className="links" href="/epikoinonia">Φόρμα επικοινωνίας και Σχολίων</a>
        </Col>
        <Col className="text-size-md">
          <h5 style={{"color" : "rgb(49, 104, 255)", "textDecoration" : "underline"}}>Όροι και Ιδιωτικότητα</h5><br />
          <a className="links" href="/">Όροι Χρήσης - Δήλωση Απορρήτου<br /></a><br />
          <a className="links" href="/">Πολιτική  Cookies</a>
        </Col>
      </Row>
    </div>
  );
}
