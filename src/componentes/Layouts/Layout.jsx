import React from 'react'
//import './Layout.css'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import CardsPage from '../Cards/CardsPage'
//import FilterDropdown from '../Dropdown/Dropdown'
//import '../Layouts/Layout.css'
const { Header, Content, Footer } = Layout;

const PrincipalLayout = () => {

    return (
        <Layout>
            <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <NavLink to = '/'>
                        Heroes
                    </NavLink>
                </Menu.Item>
            </Menu>
            </Header>
            <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 150, minHeight: 360 }}>
                <Routes>
                    <Route path ='/' element = {<CardsPage />}/>
                </Routes>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
    


export default PrincipalLayout