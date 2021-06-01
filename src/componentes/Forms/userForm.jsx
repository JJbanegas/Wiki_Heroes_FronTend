/* eslint-disable default-case */
import { Form, Input, Button, Select } from 'antd';
import {useState, useEffect} from 'react'
import axios from 'axios'

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = (props) => {

  const token= props.token
  const userValue=props.userValue

  const [user, setUser] = useState({
    _id: null,
    userName: null, 
    firstName: null, 
    lastName: null, 
    email: null, 
    phone: null,
    address: null, 
    dateBirth: null, 
    roles: null
  })

  /*const setearUsuario = () =>{
    setUser(props.userValue)
  }*/

  useEffect(() =>{
    form.resetFields();
    setUser(props.userValue) 
    console.log(props.userValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

  const [form] = Form.useForm();

  const onGenderChange = (value) => {

  };

  const onFinish = (values) => {
    console.log(values);
      try {
        const token = localStorage.getItem('x-access-token')
        console.log('token', token)
        const response = axios.put(`http://localhost:8080/api/users/${userValue._id}`, values, {headers:{ Authorization: `${token}`}})
        console.log(values, response)
      }catch (error) {
        throw error
      }
    }
    

  const onReset = () => {

  };

  return user.userName == null ? (<div>Cargando...</div>) : (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="userName" label="User Name" rules={[{ required: true }]}>
        <Input defaultValue = {user.userName}/>
      </Form.Item>
      <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
        <Input defaultValue = {user.firstName}/>
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input defaultValue = {user.lastName}/>
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input defaultValue = {user.password}/>
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input defaultValue = {user.email}/>
      </Form.Item>
      <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
        <Input defaultValue = {user.phone}/>
      </Form.Item>
      <Form.Item name="address" label="Address" rules={[{ required: true }]}>
        <Input defaultValue = {user.address}/>
      </Form.Item>
      <Form.Item name="dateBirth" label="Date of Birth" rules={[{ required: true }]}>
        <Input defaultValue = {user.dateBirth} />
      </Form.Item>
      <Form.Item name="roles" label="Rol" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="admin">Admin</Option>
          <Option value="user">Moderator</Option>
          <Option value="moderator">User</Option>
        </Select>
      </Form.Item>
      {/*<Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>*/}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={onFinish}>
          Submit
        </Button>
        {/*<Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>*/}
      </Form.Item>
    </Form>
  );
};

export default Demo