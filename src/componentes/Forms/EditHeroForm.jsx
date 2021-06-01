import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker
  
} from 'antd';
import axios from 'axios'

const EditHeroForm = (props) => {

    const pj = props.pj 
    //const token = props.token

  const [componentSize, setComponentSize] = useState('default');


  
  
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  
  const onFinish = (values) => {
    try {
      const token = localStorage.getItem('x-access-token')
      console.log('token', token)
      const response = axios.put(`http://localhost:8080/api/heroes/${pj._id}`, values, {headers:{ Authorization: `${token}`}})
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
          <Input defaultValue={pj.heroName}/>
        </Form.Item>
        <Form.Item 
        label="Firstname"
        name="firstName"
        rules={[{ required: true, message: "Please input the hero's firstname!" }]}>
          <Input defaultValue={pj.firstName}/>
        </Form.Item>
        <Form.Item 
        label="Lastname"
        name="lastName"
        rules={[{ required: true, message: "Please input the hero's lastname!" }]}
        >
          <Input defaultValue={pj.lastName}/>
        </Form.Item>
        <Form.Item 
        label="universe"
        name="universe"
        rules={[{ required: true, message: "Please input the hero's universe!" }]}>
          <Input defaultValue={pj.universe}/>
        </Form.Item>
        <Form.Item 
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input the hero's age!"}]}
        >
          <Input defaultValue={pj.age}/>
        </Form.Item>
        <Form.Item 
        label="Powers"
        name="powers"
        rules={[{ required: true, message: "Please input the hero's powers!" }]}
        >
          <Input defaultValue={pj.powers}/>
        </Form.Item>
        <Form.Item 
        label="Achievments"
        name="achievments"
        rules={[{ required: true, message: "Please input the hero's achievments!" }]}
        >
          <Input defaultValue={pj.achievments}/>
        </Form.Item>
        <Form.Item 
        label="Image Url"
        name="Image"
        rules={[{ required: true, message: 'input the url of an image of the hero' }]}
        >
          <Input defaultValue={pj.Image}/>
        </Form.Item> 
        <Form.Item 
        label="Side"
        name="side"
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
          <DatePicker defaultValue={pj.dateBirth}/>
        </Form.Item>
        <Button type="primary" htmlType="submit" > 
            Submit
        </Button>
      </Form>
    </>
  );
};

export default EditHeroForm