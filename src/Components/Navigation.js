import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

//renders a navigation bar with links to home, about, to do list, and projects pages.
export default function Navigation() {
  return (
    <div>
        <Navbar bg="info" variant="dark">
          <Container>
            <Navbar.Brand href="/">Everything Everywhere All at Once</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/user">Users</Nav.Link>
              <Nav.Link href="/toDoList">To Do List</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}
