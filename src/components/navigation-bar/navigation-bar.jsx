import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
//import logo from "../img/brand/myFlix-icon.svg";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar expand="lg" fixed="top" style={{backgroundColor:'darkgreen'}}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{fontFamily:'monospace',}}>
         {' '}
          Superflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {!user && (
            <>
              <Nav >
                <Nav.Link as={Link} to="/login" style={{fontFamily:'monospace'}}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" style={{fontFamily:'monospace'}}>
                  Signup
                </Nav.Link>
              </Nav>
            </>
          )}
          {user && (
            <>
              <Nav style={{color:'red'}}>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    FavouriteMovies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onLoggedOut: PropTypes.func.isRequired
}