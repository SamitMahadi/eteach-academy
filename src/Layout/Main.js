import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../Pages/Shared/Header/Header'
import Footer from '../Pages/Shared/Footer/Footer'
import Course from '../Pages/Course/Course/Course';


const Main = () => {
    return (
        <div>
          <Header></Header>
            <div>
        
               <Outlet></Outlet>
               
            
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;