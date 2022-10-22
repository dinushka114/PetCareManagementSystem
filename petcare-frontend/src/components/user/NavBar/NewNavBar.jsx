import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss'

function ColorSchemesExample() {
  return (
    <>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='px-4' href="#home">Home</Nav.Link>
            <Nav.Link className='px-4' href="/pet-services">Services</Nav.Link>
            <Nav.Link className='px-4' href="#pricing">Products</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link className='px-4' eventKey={2} href="/get-service">
              My dashboard
            </Nav.Link>
          </Nav>
        </Container>
        
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;