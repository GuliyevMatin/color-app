import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1 className="text-white">COLOR-REACT-APP</h1>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
