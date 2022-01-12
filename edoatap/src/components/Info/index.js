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
              <h5 className="title-cards">Αποτελέσματα εξετάσεων Ιατρικής Δεκέμβριος 2021.</h5>
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
                <h5 className="title-cards" >Σεμινάριο διάχυσης αποτελεσμάτων προγράμματος Erasmus+</h5>
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
    <Row>
      <Col>
       <Card className="cards">
         <Card.Body>
            <Row>
              <h5 className="title-cards">Αποτελέσματα εξετάσεων Ιατρικής Δεκέμβριος 2021.</h5>
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
                <h5 className="title-cards" >Σεμινάριο διάχυσης αποτελεσμάτων προγράμματος Erasmus+</h5>
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
