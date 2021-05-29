import { Form, Input, Button, DatePicker } from 'antd';
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const SignUpPage = ({setToken}) => {

    const setearToken = (token) =>{
        setToken(token)
      }

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
        const response = await axios.post(`http://localhost:8080/api/users/singnup`, values)
        setearToken(response.data.token)
        localStorage.setItem("x-access-token", response.data.token)
        window.location.assign("/heroes")
        setToken(response.data.token)
      } catch (error) {
        throw error
      }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Firstname"
        name="firstName"
        rules={[
          {
            required: false,
            message: 'Please input your firstName!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="lastName"
        rules={[
          {
            required: false,
            message: 'Please input your lastName!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="phone"
        name="phone"
        rules={[
          {
            required: false,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
      label="Birth date"
      name="dateBirth"
      rules={[
          {
              required: true,
              message: 'Please input your birth date'
          }
      ]}
      >

          <DatePicker />
        </Form.Item>


      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
      >
        <Input.Password />
      
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpPage