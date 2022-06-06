import { useContext } from 'react'
import { AuthContext } from '@router/AuthProvider'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  Input,
  Button,
  Toast
} from 'antd-mobile'


const Login =  () => {
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  const onFinish = (values) => {
    Toast.show({
      icon: 'success',
      content: '登录成功',
    })
    context.signIn(values.name, () => navigate('/demo'))
  }

  return (
    <>
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
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder='请输入姓名' />
        </Form.Item>
      </Form>
    </>
  )
}

export default Login