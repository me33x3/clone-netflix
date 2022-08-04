import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
<Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-item' to='/'>Home</Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Navigation;
