import React from 'react';
import { Button, Form, Input,Space } from 'antd';
import apiService from "../service/apiService"
import { useNavigate } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};
const AddUser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await apiService.createUser(values.username,values.age);
    navigate('/users')
  };

  const onReset = () => form.resetFields();

  const onFill = () => {
    form.setFieldsValue({
    username: 'Test',
      age: 18,
    });
  };

  return (
    <div className="add-user-main">
    <div className="add-User-form" style={{display:'flex',justifyContent:'center'}}>
     
    <Form
      {...layout}
      layout={'vertical'}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 900,
      }}
    >
    <Form.Item
      label="Fullname"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Fullname!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Age"
      name="age"
      rules={[
        {
          required: true,
          message: 'Please input your age!',
        },
      ]}
    style={{
    width: '100%',
}}
    >
    <Input type='number' />
    </Form.Item>
 
     <Form.Item {...tailLayout}>
        <Space className='add-form-btn'>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
       </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default AddUser;