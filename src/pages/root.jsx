import React from 'react';
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
const { Content } = Layout;


export default function Root() {
  return (
  <>
   <Layout style={{minHeight: '100vh',}}>
      <Layout>
        <Navbar />
        <Content
          style={{
            margin: '34px 25px 0',
          }}
          >
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  </>
  );
}