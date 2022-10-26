import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../../Assets/Carusel/pexels-christina-morillo-1181263.jpg'
import photo2 from '../../../Assets/Carusel/new2.jpg'
import photo3 from '../../../Assets/Carusel/new3.jpg'

const Home = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={photo1}
            alt="First slide"
          />
          <Carousel.Caption className='d-flex flex-column justify-content-center h-100 h1'>
            <h3 className='h1 font-weight-bold'>Welcome To eTeach Academy</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={photo2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='d-flex flex-column justify-content-center h-100 h1'>
            <h3 className='h1 font-weight-bold'>Best E-learning Platform</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={photo3}
            alt="Third slide"
          />
  
          <Carousel.Caption className='d-flex flex-column justify-content-center h-100 h1'>
            <h3 className='h1 font-weight-bold'>Learn best from the best</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Home;