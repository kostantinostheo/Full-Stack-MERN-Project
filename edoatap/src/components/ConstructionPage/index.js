import React from "react";
import {Col, Row} from 'react-bootstrap'
import {Hammer} from 'react-bootstrap-icons'
import './index.css'

export default function ConstructionPage(){
    return(
        <div className="canvas">
            <Row className="construction-title">
                <h2 className="titlee">Η Σελίδα Bρίσκεται Yπό Kατασκευή</h2>
                <Hammer className="hammer"/>
            </Row>
        </div>
    )
}