import React from 'react';
import {Outlet} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from '../Pages/Shared/Header/Header'
import Footer from '../Pages/Shared/Footer/Footer'


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