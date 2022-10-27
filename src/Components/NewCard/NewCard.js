import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const NewCard = ({course}) => {
    const{name,img,id}=course
    
    return (
        <div>



<Row  lg={2} xxl={2} className="g-4 m-0">
        
        <Col className='col-2'>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
          </Col>
      
          </Row >



        </div>
           
 
    );
};

export default NewCard;