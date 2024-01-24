import React , { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input ,Space } from 'antd';
import AuthContext from "../context/authContext";
import apiService from "../service/apiService";


const Login = () => {
  
  const [form] = Form.useForm();
  form.setFieldsValue({
    username: 'admin',
    password:'12345'
 });
  const  {setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {

      try {
        const response = await apiService.login(values);
        if(response.status){
          setAuth(response);
          navigate('/dashboard');
        }else{
         
          form.setFields([
            {
              name: 'username',
              errors: ['Invalid Username'],
            },
            {
              name: 'password',
              errors: ['Invalid Password'],
            }
         ]);
         navigate('/login');

        }
      } catch (err) {

      }
  };
 
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div class="loginmain">
      <div class="loginmain-form">
        
          <Form form={form} name="basic" layout="vertical" initialValues={{remember: true}}
            onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
            <Space direction="vertical" size="large">
            <div class='pagetitle' ><h1>Login</h1></div>
            <Form.Item
            
              label={<label style={{ fontWeight:'600' }}>Username</label>}
              name="username"
              value="admin"
              rules={[{message: 'Invalid credentials!',}]} 
            >
             <Input size="large" placeholder="Please input your username" />
            </Form.Item>

            <Form.Item
             label={<label style={{ fontWeight:'600' }}>Password</label>}
              name="password"
              value="12345"
              rules={[{message: 'Invalid credentials',},]}
            >
            <Input.Password size="large" 
              style={{
                      maxWidth:400,
                      padding:' 12px 20px',
                      border: '1px solid #ccc',
                      borderRadius: '4px', 
                }}
                 placeholder="Please input your password" />
            </Form.Item>
            <Form.Item>
              <Button danger type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
            </Space>
          </Form>
      </div>
    </div>


  );
};
export default Login;