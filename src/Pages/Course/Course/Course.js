import React from 'react';
import { Container , Row,Col} from 'react-bootstrap';
import RightSideCourseNav from '../../RightSideCourseNav/RightSideCourseNav/RightSideCourseNav'

const Course = () => {
    return (
        <div>
            <Container>
                <Row>
                     <Col lg='3'>
                       <RightSideCourseNav></RightSideCourseNav>
                     </Col>
                     
                     <Col lg='9'>
                         <h2>Course content</h2>
                     </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Course;