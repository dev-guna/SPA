import React, { useEffect } from 'react';
import { Button, Form, Input, InputNumber, Select, Space, message } from 'antd';
import apiService from "../service/apiService"
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

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
    offset: 8,
    span: 16,
  },
};

const AddUser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId

  const onFinish = async (values) => {
    await axios.put(apiService?.baseUrl + "/users/"+userId,{
      "fullname" : values?.fullname,
      "age":values?.age
    })
    .then((res) =>{
      message.info('Updated !');
      navigate('/users')
    })
    .catch((err) => console.log(err));
   
  };

  const getUser = async (id) => {
    await axios.get(apiService?.baseUrl + "/users/"+id)
    .then((res) =>{
      form.setFieldsValue({
        fullname: res?.data?.fullname,
          age: res?.data?.age,
      })
    }
    )
    .catch((err) => console.log(err));
  }

  useEffect(()=>{ getUser(userId); },[userId])

  const onReset = () => form.resetFields();



  return (
    <div style={{display:'flex',justifyContent:'center'}}>
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
      label="fullname"
      name="fullname"
      rules={[
        {
          required: true,
          message: 'Please input your fullname!',
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
        <Space>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
    </div>
  );
};
export default AddUser;