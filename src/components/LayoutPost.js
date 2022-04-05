import React from 'react';
import { Layout } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import BredCrumbItems from './BredCrumbItems';

const { Header, Content, Footer } = Layout;
const LayoutPost = ({ post, id, title }) => (
  <Layout className="layout">
    <Header style={{ background: '#ffff' }}>
      <h1 style={{
        textAlign: 'center',
        color: '#8383b3',
      }}
      >
        <WechatOutlined
          style={{
            paddingRight: '1rem',
            fontSize: '2.5rem',
          }}
        />
        User Blog
      </h1>
    </Header>
    <Content style={{ padding: '50px 50px' }}>
      <BredCrumbItems post={post} id={id} title={title} />
      <div className="site-layout-content" style={{ padding: '20px 20px' }}>
        <Outlet />
      </div>
    </Content>
    <Footer style={{ background: '#ffff' }}>USER BLOG</Footer>
  </Layout>
);

export default LayoutPost;
