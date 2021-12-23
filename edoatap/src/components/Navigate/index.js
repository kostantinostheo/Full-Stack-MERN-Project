import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './index.css'
export default function Navigate(){
  return(
    <Navbar className='navigation'>
      <Container>
        {/* <Navbar.Brand href="/"> <Image src={Logo} responsive/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Αιτήσεις" id="top-nav-dropdown">
              <NavDropdown title='Νέα Αίτηση' drop='end'>
                <NavDropdown.Item href="/login">Ισοτιμίας</NavDropdown.Item>
                <NavDropdown.Item href="/login">Αναγνώρισης και Ισοτιμίας</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Οδηγός Αιτήσεων</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ανακοινώσεις" id="top-nav-dropdown">
              <NavDropdown.Item href="/login">Όλες οι Ανακοινώσεις</NavDropdown.Item>
              <NavDropdown.Item href="/login">Αιτήσεων</NavDropdown.Item>
              <NavDropdown.Item href="/login">Εξετάσεων</NavDropdown.Item>
              <NavDropdown.Item href="/login">Αποφάσεις Δ.Σ.</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Πληροφορίες" id="top-nav-dropdown">
              <NavDropdown.Item href="/login">ΔΟΑΤΑΠ</NavDropdown.Item>
              <NavDropdown.Item href="/login">Χρήσιμοι Σύνδεσμοι</NavDropdown.Item>
              <NavDropdown.Item href="/login">Νομοθεσία</NavDropdown.Item>
              <NavDropdown.Item href="/login">Συχνές Ερωτήσεις</NavDropdown.Item>
              <NavDropdown.Item href="/login">Αιτήσεις</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
