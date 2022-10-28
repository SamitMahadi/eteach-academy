import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Courseinfo = () => {

    const course = useLoaderData()
    const {name,img,details} = course
    return (
        <div>
           <Container>
           <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}  </Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <div className='d-flex justify-content-around'>
        <Button variant="primary" ><Link className='text-decoration-none text-white' to='/course'>Go Back</Link></Button>
        <Button variant="primary" ><Link className='text-decoration-none text-white' >Dwonload file</Link></Button>
        <Button variant="primary" className=''><Link className='text-decoration-none text-white'to={'/checkout'}>Get our premium acess</Link></Button>
        </div>
      </Card.Body>
    </Card>
           </Container>
        </div>
    );
};

export default Courseinfo;