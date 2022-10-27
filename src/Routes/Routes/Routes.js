import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Course from "../../Pages/Course/Course/Course";
import Courseinfo from "../../Pages/courseInfo/Courseinfo";
import Home from '../../Pages/Home/Home/Home'
import RightSideCourseNav from "../../Pages/RightSideCourseNav/RightSideCourseNav/RightSideCourseNav";





export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children :[
            {
                path:'/',
                element: <Home></Home>
            },
            {
             path:'/courseNav/:id',
             element : <RightSideCourseNav></RightSideCourseNav>,
             loader:({params})=>(`http://localhost:5000/courseNav/${params.id}`)
             
             
             
            },
            {
                path:'/course',
                element: <Course></Course>,
                loader: ()=>fetch(`http://localhost:5000/course`)
                
                
                
            },
            {
                path:'/course/:id',
                element: <Courseinfo></Courseinfo>,
                loader: ({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            }


        ]
    }
])