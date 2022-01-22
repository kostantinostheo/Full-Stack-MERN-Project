import React , {useEffect, useState} from 'react'
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import SearchInput from '../SearchInput';
import './index.css'
import {getToken, decodeToken} from '../../utils/Common'



export default function Navigate(){
  
let [tok, getTok] = useState()
let [dec, getDek] = useState()

useEffect(()=>{
  let token = getToken();
  let decoded
  if(token != null)
    decoded = decodeToken(token);

  getTok(token)
  getDek(decoded)
},[])

  return(
    <Navbar className='navigation'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Αιτήσεις" id="top-nav-dropdown">
              {
                
                tok != null && dec.status === "user" &&
                (
                <div>
                  <NavDropdown.Item href="/nea-aitisi">Δημιουργία Νέας Αίτησης</NavDropdown.Item>
                  <NavDropdown.Divider />
                </div>)
              }
              { 
                tok === null &&
                (<div>
                  <NavDropdown.Item href="/odigos-etiseon">Δημιουργία Νέας Αίτησης</NavDropdown.Item>
                  <NavDropdown.Divider />
                </div>
                )
              }
              <NavDropdown.Item href="/odigos-etiseon">Οδηγός Αιτήσεων</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ανακοινώσεις" id="top-nav-dropdown">
              <NavDropdown.Item href="/ipo-kataskevi">Όλες οι Ανακοινώσεις</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Αιτήσεων</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Εξετάσεων</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Αποφάσεις Δ.Σ.</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Πληροφορίες" id="top-nav-dropdown">
              <NavDropdown.Item href="/ipo-kataskevi">ΔΟΑΤΑΠ</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Χρήσιμοι Σύνδεσμοι</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Νομοθεσία</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Συχνές Ερωτήσεις</NavDropdown.Item>
              <NavDropdown.Item href="/ipo-kataskevi">Αιτήσεις</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/epikoinonia">Επικοινωνία</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchInput/> {/*Setting the input search component */}
      </Container>
    </Navbar>
  );
}
