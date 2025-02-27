
import AcademicDepartment from "../pages/Admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/Admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/Admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/Admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/Admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/Admin/academicManagement/CreateAcademicSemester";
import CreateStudent from "../pages/Admin/academicManagement/CreateStudent";
import StudentData from "../pages/Admin/academicManagement/StudentData";
import StudentDetails from "../pages/Admin/academicManagement/StudentDetails";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Courses from "../pages/Admin/courseManagement/Courses";
import CreateCourses from "../pages/Admin/courseManagement/CreateCourses";
import OfferCourse from "../pages/Admin/courseManagement/OfferCourse";
import RegisteredSemester from "../pages/Admin/courseManagement/RegisteredSemester";
import SemesterRegistration from "../pages/Admin/courseManagement/SemesterRegistration";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import OfferedCourse from "../pages/Faculty/OfferedCourse";


export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create A. Semester',
                path: 'create-academic-semesters',
                element: <CreateAcademicSemester></CreateAcademicSemester>
            },
            {
                name: 'Academic Semester',
                path: 'academic-semesters',
                element: <AcademicSemester></AcademicSemester>
            },

            {
                name: 'Create A. Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty></CreateAcademicFaculty>
            },
            {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty></AcademicFaculty>
            },
            {
                name: 'Create A. Department',
                path: 'create-academic-department',
                element: <CreateAcademicDepartment></CreateAcademicDepartment>
            },
            {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment></AcademicDepartment>
            },
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent></CreateStudent>
            },
            {
                name: 'Students',
                path: 'student-data',
                element: <StudentData></StudentData>
            },
            {

                path: 'student-data/:studentId',
                element: <StudentDetails></StudentDetails>
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>
            },

        ]
    },
    {
        name: 'Course Management',
        children: [
            {
                name: 'Semester Registration',
                path: 'semester-registration',
                element: <SemesterRegistration></SemesterRegistration>
            },
            {
                name: 'Registered Semester',
                path: 'registered-semester',
                element: <RegisteredSemester></RegisteredSemester>
            },
            {
                name: "Create Course",
                path: 'create-course',
                element: <CreateCourses></CreateCourses>
            },
            {
                name: 'Courses',
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                name: 'Offer Course',
                path: 'offer-course',
                element: <OfferCourse></OfferCourse>
            },
            {
                name: 'Offered Courses',
                path: 'offered-courses',
                element: <OfferedCourse></OfferedCourse>
            },

        ]
    },
]



// programetical way
// export const adminRoutes = adminPaths.reduce((acc:TRoute[],item) => {
//     if(item.path && item.element){
//         acc.push({
//             path:item.path,
//             element:item.element
//         })
//     }

//     if(item.children){
//         item.children.forEach((child) =>{
//             acc.push({
//                 path:child.path,
//                 element:child.element
//             })
//         })
//     }

//     return acc;
// },[])



// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) =>{
//     if(item.path && item.name){
//         acc.push({
//             key:item.name,
//             label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//     }
//     if(item.children){
//         acc.push({
//             key:item.name,
//             label:item.name,
//             children:item.children.map((child) =>({
//                 key:child.name,
//                 label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//             }))
//         })
//     }
//     return acc
// }, [])



// hard coded way

// export const adminPaths = [
//     {
//         index: true,
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: 'dashboard',
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent></CreateStudent>
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin></CreateAdmin>
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty></CreateFaculty>
//     }
// ]