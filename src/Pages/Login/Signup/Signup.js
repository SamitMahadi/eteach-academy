import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Signup = () => {

const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoUrl.value
    const email = form.email.value
    const password = form.password.value;
    console.log(name,photoURL,email,password);
 }

    return (
        <Container className='pt-5 border-5'>
        <Form className='width-50' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="name"name='name' placeholder="your name" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" name='photoURL' placeholder="photo url" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" name='name' required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" name='password'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
   
      <Button variant="primary" type="submit">
        sign up
      </Button>
      
    
    </Form>
    </Container>
         
    );
};

export default Signup;