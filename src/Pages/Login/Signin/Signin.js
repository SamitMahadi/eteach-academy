import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Signin = () => {

const {providerLogin}=useContext(AuthContext)

const googleProvider = new GoogleAuthProvider()

const handleGoogleSignIN=()=>{
  providerLogin(googleProvider)
  .then(result =>{
    const user =result.user;
    console.log(user);
  })

.catch(error=>{
  console.error(error)
})

}

    return (
      <Container className='pt-5 border-5'>
        <Form className='width-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <Button variant="primary" type="submit">
        sign in
      </Button>
      <Button variant="primary"  onClick={handleGoogleSignIN}>
        
         sign in with google
      </Button>
      </div>
    </Form>
      </Container>
    );
};

export default Signin;