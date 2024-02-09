import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#">REACT-REDUXC0RE-JSON-API</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;