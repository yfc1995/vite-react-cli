import { useContext } from 'react';
import { AuthContext } from 'router/AuthProvider';
import { useNavigate } from 'react-router-dom';


<% if (projectType === 'PC') {%>import { Button, Checkbox, Form, Input, message } from 'antd';<%}%>
<% if (projectType === 'Mobile') {%>import {
  Form,
  Input,
  Button,
  Toast
} from 'antd-mobile';<%}%>

const Login =  () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const onFinish = (values) => {
    <% if (projectType === 'Mobile') {%>
      Toast.show({
        icon: 'success',
        content: '登录成功'
      });
    <%} else {%>
      message.success('登录成功')
    <% }%>
    
    context.signIn(values.name, () => navigate('/demo'));
  };

  return (
    <>
    <% if (projectType === 'Mobile') {%>
      <Form
        layout='horizontal'
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
           提交
          </Button>
        }
      >
        <Form.Item
          name='name'
          label='姓名'
          rules={[{
           required: true, message: '姓名不能为空'
          }]}
        >
         <Input placeholder='请输入姓名' />
        </Form.Item>
      </Form>
      <%} else {%>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
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
        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <% }%>
      
    </>
  );
};

export default Login;