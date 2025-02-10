import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferedCourse from "../pages/Faculty/OfferedCourse";

export const facultyPaths = [
    {
        name: 'Dashboard',
        path:'dashboard',
        element:<FacultyDashboard></FacultyDashboard>
    },
    
    {
        name: 'Offerd Course',
        path:'offered-course',
        element:<OfferedCourse></OfferedCourse>
    },
    
]