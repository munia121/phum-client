import { Layout, Menu } from "antd";
import { sidebarItemsGenerators } from "../../utils/sidebarItemsGenerators";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/featurs/auth/authSlice";

const { Sider } = Layout;

const userRole = {
    SUPER_ADMIN: 'superAdmin',  // ✅ Added
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
};


const Sidebar = () => {
    const user = useAppSelector(selectCurrentUser);
    // console.log(user);

    // Ensure the user object and role are defined before proceeding
    if (!user || !user.role) {
        console.log('no user no role found')
        return null;  // Or render a loading spinner or message
    }

    let sidebarItems;

    switch (user.role) {
        case userRole.SUPER_ADMIN:
            sidebarItems = sidebarItemsGenerators(adminPaths, userRole.SUPER_ADMIN); 
            break;
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerators(adminPaths, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerators(facultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerators(studentPaths, userRole.STUDENT);
            break;
        default:
            console.warn("Invalid role:", user.role);
            return null;
    }
    

    return (
        // <Sider>
        //     <div
        //         style={{
        //             color: 'white',
        //             height: '3rem',
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center'
        //         }}>
        //         <h1>PH UNI</h1>
        //     </div>
        //     <Menu
        //         theme="dark"
        //         mode="inline"
        //         defaultSelectedKeys={['4']}
        //         items={sidebarItems}
        //     />
        // </Sider>
         <Sider>
         <Menu theme="dark" mode="inline" items={sidebarItems} />
     </Sider>
    );
};

export default Sidebar;
