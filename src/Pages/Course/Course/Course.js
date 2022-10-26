import React from 'react';
import { Container , Row,Col} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NewCard from '../../../Components/NewCard/NewCard';
import RightSideCourseNav from '../../RightSideCourseNav/RightSideCourseNav/RightSideCourseNav'

const Course = () => {
    const Courses = useLoaderData()
    
    return (
        <div>
            <Container>
                <Row>
                     <Col lg='3'>
                       <RightSideCourseNav></RightSideCourseNav>
                     </Col>
                     
                     <Col lg='9'>
                        <h2> {Courses.length}</h2>
                        {
                            Courses.map(course => <NewCard></NewCard>)
                        }
                        
                      
                     </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Course;