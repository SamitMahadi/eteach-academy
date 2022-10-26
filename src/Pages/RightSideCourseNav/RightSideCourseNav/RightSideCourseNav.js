import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link>{category.Nav_name}</Link>

                  </p> )


                }
            </div>
        </div>
    );
};

export default RightSideCourseNav;