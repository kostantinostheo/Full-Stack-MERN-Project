import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import SearchInput from '../SearchInput';
import './index.css'
export default function Navigate(){
  return(
    <Navbar className='navigation'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Αιτήσεις" id="top-nav-dropdown">
              <NavDropdown.Item href="/nea-aitisi">Δημιουργία Νέας Αίτησης</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/odigos-etiseon">Οδηγός Αιτήσεων</NavDropdown.Item>
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
            <Nav.Link href="/epikoinonia">Επικοινωνία</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchInput/> {/*Setting the input search component */}
      </Container>
    </Navbar>
  );
}
