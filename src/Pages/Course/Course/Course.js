import {React} from 'react';
import { Container , Row,Col} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NewCard from '../../../Components/NewCard/NewCard';
import RightSideCourseNav from '../../RightSideCourseNav/RightSideCourseNav/RightSideCourseNav'

const Course = () => {

 const Allcourse =useLoaderData()
    
    return (
        <div>
            <Container>
                <Row>
                     <Col lg='4'>
                       <RightSideCourseNav></RightSideCourseNav>
                     </Col>
                     
                     <Col lg='8'>
                      
                        {
                            Allcourse.map(course=><NewCard
                            key={course.id}
                            course={course}
                           
                            ></NewCard>)
                        }
                       
                        
                      
                     </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Course;