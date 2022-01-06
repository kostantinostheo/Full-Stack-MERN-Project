import "./index.css"
import React from 'react';
import { Row, Button, Card } from 'react-bootstrap'

export default function Info() {
  return (
      <div className="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Αποτελέσματα εξετάσεων Ιατρικής - Δεκέμβριος 2021 - Έκτακτη εξεταστική περίοδος χειρουργική ανατομία</Card.Title>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Σεμινάριο διάχυσης αποτελεσμάτων προγράμματος Erasmus+</Card.Title>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Πορεία Εκτέλεσης Προϋπολογισμού Νοεμβρίου 2021</Card.Title>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Λίστα συμμετεχόντων στις εξεταάσεις οδοντιατρικής περιόδου Ιανουαρίου 2020</Card.Title>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
     </div>
 );
}
