import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
  
    return (
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">eTeach-Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Link to='/course'>Courses</Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link ><Link to={'/signin'}>Sign in</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} >{user.photoURL?
              <Image style={{height:'30px'}} roundedCircle src={user.photoURL}>
              </Image>:<FaUser></FaUser>}
                  
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;