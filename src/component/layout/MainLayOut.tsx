import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { adminPaths, } from '../../routes/admin.routes';
import { sidebarItemsGenerators } from '../../utils/sidebarItemsGenerators';
import Sidebar from './Sidebar';

const { Header, Content, Footer, } = Layout;

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

const MainLayOut = () => {
    return (
        <Layout style={{ height: '100vh' }}>
           <Sidebar></Sidebar>
            <Layout>
                <Header style={{ padding: 0, }} />
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
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayOut;