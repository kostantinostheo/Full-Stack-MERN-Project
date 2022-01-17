import "./index.css"
import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap'

export default function Info() {
  return (
    <div className="must-see">
    <Row>
      <Col>
       <Card className="cards">
         <Card.Body>
            <Row>
              <h5 className="title-cards">Υποχρεαωτικά μέτρα ασφαλείας για τον περιορισμό διασποράς της πανδημίας για όλους τους συμμετεχόντες στη διαδικασία των εξετάσεων.</h5>
            </Row>
            <Row>
              <Button id='but'> Περισσότερα </Button>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="cards">
         <Card.Body>
              <Row>
                <h5 className="title-cards" >Χρόνοι διεκπεραίωσης αιτήσεων μετά τη λήψη Αριθμού Πρωτοκόλλου</h5>
              </Row>
              <Row>
                <Button id='but'> Περισσότερα </Button>
              </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br/>
    <Row>
      <Col>
       <Card className="cards">
         <Card.Body>
            <Row>
              <h5 className="title-cards">Δελτίο Τύπου – Συνοπτικός απολογισμός έτους 2021</h5>
            </Row>
            <Row>
              <Button id='but'> Περισσότερα </Button>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="cards">
          <Card.Body>
                <Row>
                  <h5 className="title-cards" >Πορεία Εκτέλεσης Προϋπολογισμού Νοεμβρίου 2021</h5>
                </Row>
                <Row>
                  <Button id='but'> Περισσότερα </Button>
                </Row>
            </Card.Body>
          </Card>
      </Col>
    </Row>
    </div>
 );
}
