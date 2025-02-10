import { Layout, Menu } from "antd";
import { sidebarItemsGenerators } from "../../utils/sidebarItemsGenerators";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {

    const role = 'student'

    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerators(adminPaths, userRole.ADMIN);
            break
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerators(facultyPaths, userRole.FACULTY);
            break
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerators(studentPaths, userRole.STUDENT);
            break

        default:
            break
    }


    return (
        <Sider>
            <div
                style={{
                    color: 'white',
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <h1>PH UNI</h1>
            </div>
            <Menu
                theme="dark" mode="inline" defaultSelectedKeys={['4']}
                items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;