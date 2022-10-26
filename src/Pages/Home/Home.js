import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Shared/CourseDetails/CourseDetails';

const Home = () => {
    const allCourses = useLoaderData()
    return (
        <div>
            <h2>Courses Count Home: {allCourses.length}</h2>
            <Container>
                <Row className='course-card'>
                    <Col>
                        {
                            allCourses.map(course => <CourseDetails
                                course={course}
                                key={course._id}
                            ></CourseDetails>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;