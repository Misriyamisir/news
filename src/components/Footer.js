import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Facebook, Instagram, Linkedin, Twitter} from 'react-feather';





function Footer() {
  return (
    <div>
        <Navbar style={{backgroundColor:'black'}}>
      <Container>
        <Navbar.Brand className='text-light' href="#home"><h4>Follow Us</h4>
        <Facebook className='me-1'></Facebook>
        <Instagram className='me-2'></Instagram>
        <Linkedin className='me-2'></Linkedin>
        <Twitter></Twitter>
        <hr />

        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  className='text-light'>
            <h4 className='me-2'>QUICK LINKS</h4>
            <a className='text-light' href="" style={{textDecoration:'none'}}><h6>T&C</h6></a>
            <a className='text-light' href="" style={{textDecoration:'none'}}><h6>Privacy Policy</h6></a>
            <a className='text-light' href="" style={{textDecoration:'none'}}><h6>Advertise With Us</h6></a>
            <a className='text-light' href="" style={{textDecoration:'none'}}><h6>Brand Solutions</h6></a>
<hr />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Footer