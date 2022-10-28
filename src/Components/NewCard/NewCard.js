import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const NewCard = ({course}) => {
    const{name,img,id,details}=course
    
    return (
        <div>



    <Row className="g-4 m-0">
        
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {
                  details.length>150?
                  <p>{details.slice(0,200)+'....'}</p>
                  :
                  <p>{details}</p>
                }
              </Card.Text>
              <Button variant="primary"><Link className='text-white text-decoration-none' to={`/course/${id}`}>View Details</Link></Button>
            </Card.Body>
          </Card>
          </Col>
      
    </Row >



        </div>
           
 
    );
};

export default NewCard;