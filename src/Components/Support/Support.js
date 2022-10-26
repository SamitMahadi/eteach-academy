import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Support = () => {
    return (
        
    <Container className=''>
         <Card className='mt-10' border="dark" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    
    );
};

export default Support;