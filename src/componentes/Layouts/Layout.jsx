import React, {useEffect, useState} from 'react'
import { Layout, Menu } from 'antd';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import CardsPage from '../Cards/CardsPage&Drop'
import LogIn from '../LogIn/LogInPage'
import UsersPage from '../Users/usersPage'
import '../Layouts/Layout.css'
import jwt from 'jsonwebtoken'
const { Header, Content, Footer } = Layout;

const PrincipalLayout = () => {

    const[token, setToken] = useState()
    const[permission, setPermission] = useState()

    const LogOut = () =>{
        localStorage.clear()
        window.location.assign("/")
    }

    useEffect(()=>{
        if(token){
            const rol = jwt.decode(token)
            if(rol.role){
                console.log("rolaso", rol.role.name)
                setPermission(rol.role.name)
            }
        }
    }, [token])


    return (
        <Layout>
            <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo" />
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {!(token) &&
                <Menu.Item key="1">
                    <NavLink to = '/'>
                        Log In
                    </NavLink>
                </Menu.Item>
                }
                {(permission === "moderator" || permission === "admin" || permission === "user") &&
                    <Menu.Item key="1">
                        <NavLink to = '/heroes'>
                            Heroes
                        </NavLink>
                    </Menu.Item> /*&& window.location.assign("/heroes")*/
                }
                {(permission === "admin") &&
                    <Menu.Item key="2"> 
                        <NavLink to = '/users'>
                            Users
                        </NavLink>
                    </Menu.Item>
                }
                {(permission === "moderator" || permission === "admin" || permission === "user") &&
                    <Menu.Item key="3">
                        <div onClick={LogOut}>
                            Log out
                        </div>
                    </Menu.Item>
                }
            </Menu>
            </Header>
            {/*(token.roles.name === "moderator" || token.roles.name === "admin") && <button style = {{ padding: 200 }}/>*/}
            <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 150, minHeight: 360 }}>
                <Routes>
                    <Route path ='/users' element = {<UsersPage />}/>
                    <Route path ='/heroes' element = {<CardsPage setToken={value => setToken(value)} />}/>
                    <Route path ='/' element = {<LogIn setToken={value => setToken(value)}/>}/>                  
                </Routes>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
    


export default PrincipalLayout