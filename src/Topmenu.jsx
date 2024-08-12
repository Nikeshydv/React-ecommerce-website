
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaCartArrowDown } from "react-icons/fa";



const Topmenu=()=>{
    return(
        <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> 
            <FaCartArrowDown />      
          </Nav>
        </Container>
      </Navbar>

      
    </>
        
        
    )
}

export default Topmenu;