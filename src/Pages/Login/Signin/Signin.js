import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';





const Signin = () => {

  const [error,setError] =useState('')


  const {logIn}=useContext(AuthContext)
  const navigate = useNavigate()
  const location =useLocation();

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = event=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value;
    logIn(email,password)
    .then(result=> {
      const user = result.user;
      console.log(user);
      form.reset();
      setError('')
      navigate(from,{replace:true});

    })
    .catch(error=>{
                    console.error(error);
                    setError(error.message);
                   })
  }

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
        <Form className='width-50' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <Button variant="primary" type="submit">
        sign in
      </Button>
      <Form.Text className='text-danger'>
       {error}
      </Form.Text>
      <Button variant="primary"  onClick={handleGoogleSignIN}>
        
         sign in with google
      </Button>
      </div>
    </Form>
      </Container>   
   
    );
};

export default Signin;