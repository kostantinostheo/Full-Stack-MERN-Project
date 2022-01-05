import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import './index.css'
import {decodeToken} from '../../utils/Common'

export default function LogoutBut() {
    
    const [username, setUsername] = useState()
    
    useEffect(()=>{
        setUsername(decodeToken().firstname)
    }, [])

    function LogOut(){
        localStorage.removeItem('token')
    }
    
    return (
        <Col>
            <Dropdown id="logout">
                <Dropdown.Toggle>
                    {username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/dashboard">Προφίλ</Dropdown.Item>
                    <Dropdown.Item onClick={LogOut} href="/">Έξοδος</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    );
}