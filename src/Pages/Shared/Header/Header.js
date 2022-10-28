import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  
const handleLogOut =()=>{
  logOut()
  .then(()=>{}  )
  .cath(error=>console.error(error))
}

    return (
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to='/'>eTeach-Academy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='text-decoration-none text-white' to='/'>Home</Link></Nav.Link>
            <Link className='text-decoration-none text-white' to='/course'>Courses</Link>
            <Nav.Link className='text-decoration-none text-white' to='/blog'>Blog</Nav.Link>
            
          </Nav>
          <Nav>
            
             <Nav.Link  href="#memes">
            {
                user?.uid?
                <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogOut}  variant="primary">logout</Button>
                </>
                :
                <>
                <Link to={'/signin'}>Signin</Link>
                <Link to={'/signup'}>Signup</Link>
                </>
             }


              
              </Nav.Link>
            
            
               <Nav.Link eventKey={2} >
                {
                user?.photoURL?
               <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}>
              </Image>:<FaUser></FaUser>
                  
                 }
                 
                  </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;