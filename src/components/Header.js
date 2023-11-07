import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
 <Navbar style={{backgroundColor:'black',height:'100px'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{textDecoration:'none'}} href="#home">
<Link to={'/'}>
            <img
                src="https://i.postimg.cc/15SS01zL/news34.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
  
</Link>           <b> News34</b></Navbar.Brand>
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link style={{textDecoration:'none'}} href="#home">Business</Nav.Link>
            <Nav.Link style={{textDecoration:'none'}} href="#features">Sports</Nav.Link>
            <Nav.Link style={{textDecoration:'none'}} href="#pricing">Politics</Nav.Link>
            <Nav.Link style={{textDecoration:'none'}} href="#home">Technology</Nav.Link>
            <Nav.Link style={{textDecoration:'none'}} href="#features">Entertainment</Nav.Link>
            <Nav.Link style={{textDecoration:'none'}} href="#pricing">Global</Nav.Link>
        </Nav>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search News"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Header