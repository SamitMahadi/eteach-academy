import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Courseinfo from '../../courseInfo/Courseinfo';

const RightSideCourseNav = () => {
    const course =useLoaderData()
    
    

    const[courseCategories,setCourseCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res=>res.json())
        .then(data=> setCourseCategories(data));
    },[])
    return (
        <div >
            <div className=''>
                {
                  courseCategories.map(category => <p key={category.nav_id}>
                    <Container className='mb-5 '>

                         <Link className='text-decoration-none'>{category.Nav_name}</Link>
                         
                    </Container>

                  </p>
                   )


                }
            </div>
        </div>
    );
};

export default RightSideCourseNav;