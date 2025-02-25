// import React from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { adminPaths, } from '../../routes/admin.routes';
// import { sidebarItemsGenerators } from '../../utils/sidebarItemsGenerators';
import { Button, Layout, } from 'antd';
import {  Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/featurs/auth/authSlice';


const { Header, Content } = Layout;

// const items: MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
//     },
//     {
//         key: 'User managment',
//         label: 'User management',
//         children: [
//             {
//                 key: 'create Admin',
//                 label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>
//             },
//             {
//                 key: 'create Faculty',
//                 label: <NavLink to={'/admin/create-faculty'}>Create Faculty</NavLink>
//             },
//             {
//                 key: 'create Student',
//                 label: <NavLink to={'/admin/create-student'}>Create Student</NavLink>
//             },
//         ]
//     }
// ]

const MainLayOut = () =>{

    const dispatch =useAppDispatch() 

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Layout style={{ height: '100vh' }}>
           <Sidebar></Sidebar>
            <Layout>
                <Header>
                    <Button onClick={handleLogout}>Logout</Button>{""}
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
               
            </Layout>
        </Layout>
    );
};

export default MainLayOut;