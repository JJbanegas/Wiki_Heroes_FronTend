import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
//import {useState, useEffect} from 'react'
//import {Routes, Route} from 'react-router-dom'
//import {NavLink} from 'react-router-dom';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = ({setToken}) => {

 /* var currpage    = window.location.href;
  var lasturl     = sessionStorage.getItem("last_url");

  if(lasturl == null || lasturl.length === 0 || currpage !== lasturl ){
      sessionStorage.setItem("last_url", currpage);
      alert("New page loaded");
  }else{
      alert("Refreshed Page");  
  }*/


  /*const setearToken = (token) =>{
    setToken(token)
  }*/

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/singnin`, values)
      localStorage.setItem("x-access-token", response.data.token)
      await setToken(response.data.token)
      window.location.assign("/heroes")
      //setearToken(response.data.token)
    } catch (error) {
      //const valid = true
      throw error
    }
  };

  const handleSignUp = () => {
    window.location.assign("/signup")
  }
  
  const onFinishFailed = (values) => {
    console.log('Failed:', values);
  };

  /*const redirect = () => {
    window.location.assign("/heroes")
  }*/

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" > 
            Submit
        </Button>
        <Button onClick={handleSignUp}>
          Sing Up
          </Button>
      </Form.Item>
    </Form>
  );
};
//window.location.href
export default Demo