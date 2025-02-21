import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import {  adminPaths} from "./admin.routes";
import { routesGenerators } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoute from "../component/layout/ProtectedRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<ProtectedRoute>
            <App></App>
        </ProtectedRoute>,
        children:[
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path:'/admin',
        element:<ProtectedRoute>
            <App></App>
        </ProtectedRoute>,
        children: routesGenerators(adminPaths)
    },
    {
        path:'/faculty',
        element:<App></App>,
        children: routesGenerators(facultyPaths)
    },
    {
        path:'/student',
        element:<App></App>,
        children: routesGenerators(studentPaths)
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
])

export default router;