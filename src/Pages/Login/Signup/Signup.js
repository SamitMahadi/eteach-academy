import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const[error,setError]=useState('')
    const{createUser}= useContext(AuthContext)

const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value;
    console.log(name,photoURL,email,password);


    createUser(email,password)
    .then(result=>{
        const user =result.user
        console.log(user);
        setError('')
        form.reset()
    })
    .catch(error=>{
        
        
                   console.error(error)
                   setError(error.message);

    
    
                });
 }

    return (
        <Container className='pt-5 border-5'>
        <Form className='width-50' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" name="name" >
        
        <Form.Control type="name"name="name" placeholder="your name" />
      
      </Form.Group>
      <Form.Group className="mb-3" name="photoURL" >
        
        <Form.Control type="text" name="photoURL" placeholder="photo url" />
       
      </Form.Group>
      <Form.Group className="mb-3"name="email" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" name="email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" name='password'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
   
      <div className='d-flex '>
      <Button variant="primary" type="submit">
        sign up
      </Button>
      <Form.Text className='text-danger'>
        {error}
      </Form.Text>

      </div>
      
    
    </Form>
    </Container>
         
    );
};

export default Signup;