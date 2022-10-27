import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const RightSideCourseNav = () => {
    

    const[courseCategories,setCourseCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res=>res.json())
        .then(data=> setCourseCategories(data));
    },[])
    return (
        <div>
            <div>
                {
                  courseCategories.map(category => <p key={category.nav_id}>
                    <Container>

                         <Link to={`/courseNav/${category.nav_id}`}>{category.Nav_name}</Link>
                         
                    </Container>

                  </p>
                   )


                }
            </div>
        </div>
    );
};

export default RightSideCourseNav;