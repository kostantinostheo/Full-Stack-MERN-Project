import "./index.css"
import React from 'react';
import { Row, Button, Card } from 'react-bootstrap'

export default function Info() {
  return (
      <div className="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Περισσότερα</Button>
          </Card.Body>
        </Card>
     </div>
 );
}
