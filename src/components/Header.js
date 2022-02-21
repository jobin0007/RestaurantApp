import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
function Header() {
  return <div>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>



</>
  </div>;
}

export default Header;
