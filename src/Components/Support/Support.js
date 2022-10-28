import React from 'react';
import { Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';



const Support = () => {
    return (
        
        
    <Container className=' gap-3 d-flex align-items-center justify-content-center'>
                

         <Card className='mt-10 col'  border="dark" style={{ width: '18rem' }}>
        <Card.Body>
        
          <Card.Title> Life time support</Card.Title>
          <Card.Text>
          Get FREE support for the life of your home. We will give you support through Facebook, Skype and over the call.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='mt-10 col' border="dark" style={{ width: '18rem' }}>
        <Card.Body>
        
          <Card.Title>Qualified Teacher</Card.Title>
          <Card.Text>
          A qualified teacher is commonly defined as a teacher who has at least the minimum academic qualifications required for...
          </Card.Text>
        </Card.Body>
      </Card>




      <Card className='mt-10 col' border="dark" style={{ width: '18rem' }}>
        <Card.Body>
        
          <Card.Title>Premium Quality</Card.Title>
          <Card.Text>
          Whatever your company is in need of, rest assured that The Top Quality Services will do it perfectly!, we are ready for work..
          </Card.Text>
        </Card.Body>
      </Card>


    </Container>
    
    );
};

export default Support;