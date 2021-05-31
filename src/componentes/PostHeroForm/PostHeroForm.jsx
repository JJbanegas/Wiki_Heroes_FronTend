import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker
  
} from 'antd';
import axios from 'axios'

const PostHeroForm = () => {
  const [componentSize, setComponentSize] = useState('default');


  
  
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  
  const onFinish = (values) => {
    try {
      const token = localStorage.getItem('x-access-token')
      console.log('token', token)
      const response = axios.post(`http://localhost:8080/api/heroes`, values, {headers:{'x-access-token': `${token}`}})
      console.log(values, response)
      
      
    }catch (error) {
      throw error
    }
  }
  
  

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
      >
        
        <Form.Item 
        label="Hero name"
        name="heroName"
        rules={[{ required: true, message: 'Please input the hero name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="Firstname"
        name="firstName"
        rules={[{ required: true, message: "Please input the hero's firstname!" }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="Lastname"
        name="lastName"
        rules={[{ required: true, message: "Please input the hero's lastname!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="universe"
        name="universe"
        rules={[{ required: true, message: "Please input the hero's universe!" }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input the hero's age!"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="Powers"
        name="powers"
        rules={[{ required: true, message: "Please input the hero's powers!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="Achievments"
        name="achievments"
        rules={[{ required: true, message: "Please input the hero's achievments!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="Image Url"
        name="imageUrl"
        rules={[{ required: true, message: 'input the url of an image of the hero' }]}
        >
          <Input />
        </Form.Item> 
        <Form.Item 
        label="Side"
        name="Side"
        rules={[{ required: true, message: "Please input whether he's good or bad" }]}
        >
          <Select>
            <Select.Option value="hero">Hero</Select.Option>
            <Select.Option value="villain">Villain</Select.Option>
          </Select>
        </Form.Item>
        
        
        <Form.Item 
        label="Birth date"
        name="dateBirth"
        >
          <DatePicker />
        </Form.Item>
        <Button type="primary" htmlType="submit" > 
            Submit
        </Button>
      </Form>
    </>
  );
};

export default PostHeroForm