import React ,{useEffect, useState}from 'react';
import { Table,Row,Divider,Col,Modal ,Button, message } from 'antd';
import { PlusCircleOutlined ,CloseSquareOutlined,EditOutlined } from '@ant-design/icons';
import axios from "axios";
import apiService from "../service/apiService"
import { useNavigate } from "react-router-dom";

const Users = (props) => {

  const [user, setuserlists] = useState([]);
  const navigate = useNavigate();
  const handleOk = () => navigate('/add-user')

  const getLists = async () => {
    await axios.get(apiService?.baseUrl + "/users")
    .then((res) =>{
      setuserlists(res.data)})
    .catch((err) => console.log(err));
  }

  const deleteRec = async (id) => {
    await axios.delete(apiService?.baseUrl + "/users/"+id)
    .then((res) =>{
    message.info('Deleted!');
    getLists()})
    .catch((err) => console.log(err));
  }

  useEffect(()=>{getLists() },[])

  const onEdit = (record) => {
    navigate(`/edit-user/${record?._id}`);
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this User record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteRec(record?._id)
      },
    });
  };

  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'fullname',
      key: 'fullname',
      fixed: 'center',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'center',
    },
  
    {
      title: 'Action',
      key: 'operation',
      fixed: 'center',
      width: 100,
      render: (_, record) => (
        <>
      <Button type="primary" shape="round" icon={<EditOutlined />} onClick={() => {onEdit(record); }} size="medium"> Edit</Button>{" "}
      <Button type="primary" shape="round" danger icon={<CloseSquareOutlined />} onClick={() => {onDeleteStudent(record); }} size="medium"> Delete</Button>
      </>
      )
    },
  ];

  React.useEffect(() => {},[user]);

  return (
  <>
  <Row className='add-btn' justify="end">
    <Col span={2}> 
    <Button type="primary" shape="round" onClick={handleOk} icon={<PlusCircleOutlined />} size="large">Add</Button>
    </Col>
  </Row>
  <Divider orientation="left">User List</Divider>
  <Row justify="center">
    <Col span={24}>
      <Table
          columns={columns}
          dataSource={user}
          scroll={{
            x:300,
            y: 550,
          }}
        />
    </Col>
  </Row>
</>)
}
export default Users;