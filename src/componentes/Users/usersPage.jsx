import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table, Space, Button} from 'antd'
import 'antd/dist/antd.css'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import UserModifyModal from '../Modals/userModifyModal'



const UsersPage = (props) => {


  const [users, setUsers] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  

  const HandleOnDelete = async (event) =>{
    console.log("holaaa", event)
    const response = await axios.delete(`http://localhost:8080/api/users/${event._id}`)
    console.log(response)
    getAllBooks()
  }

  const HandleOnClick = () => {
    setIsModalVisible(true)
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  const getAllBooks = async () =>{
  let setear = [] 
  const response = await axios.get(`http://localhost:8080/api/users`)

  response.data.forEach(item =>{
    const user = {
      _id: item._id,
      userName: item.userName, 
      firstName: item.firstName, 
      lastName: item.lastName, 
      email: item.email, 
      phone: item.phone,
      address: item.address, 
      dateBirth: item.dateBirth, 
      roles: item.roles.name
    }
    setear.push(user)
  })
  setUsers(setear)
  }

  const columns = [
    {
      title: 'userName',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: 'firstName',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'dateBirth',
      dataIndex: 'dateBirth',
      key: 'dateBirth'
    },
    {
      title: 'roles',
      dataIndex: 'roles',
      key: 'roles'
    },
    {
      title: '', 
      key: 'action',
      render: (text, row) => 
      <Space size= "middle">
        <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() =>HandleOnDelete(row)}/>
        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick = {() => HandleOnClick()}/>
      </Space>
    }
  ]

  return (
      <div>
        <h1>Books</h1>
        <Table dataSource = {users} columns = {columns} rowKey='_id' />
        {<UserModifyModal visible = {isModalVisible} setVisible = {setIsModalVisible}/>}
      </div>
    )
}

export default UsersPage