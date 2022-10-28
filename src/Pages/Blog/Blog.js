import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
      <Container className='mt-5'>
          <Card className='mb-5'>
      <Card.Header>What is Cors?</Card.Header>
      <Card.Body>
        
        <Card.Text>
        CORS stands for cross-origin resource sharing. Just like HTTPS, it's a protocol that defines some rules for sharing resources from a different origin. We know that modern web apps consist of two key components: a client and a server. The client requests some data from the server, and the server sends back data as a response.
        </Card.Text>
        
      </Card.Body>
    </Card>
          <Card className='mb-5'>
      <Card.Header>Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
      <Card.Body>
        
        <Card.Text>
        IFirebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />

        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
        </Card.Text>
        
      </Card.Body>
    </Card>
          <Card className='mb-5'>
      <Card.Header>How does the private route work?</Card.Header>
      <Card.Body>
        
        <Card.Text>
        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Card.Text>
        
      </Card.Body>
    </Card>
          <Card className='mb-5'>
      <Card.Header>What is Node? How does Node work?</Card.Header>
      <Card.Body>
        
        <Card.Text>
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
        </Card.Text>
        
      </Card.Body>
    </Card>

      </Container>
    );
};

export default Blog;