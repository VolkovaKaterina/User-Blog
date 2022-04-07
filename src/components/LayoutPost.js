import React from 'react';
import { Button, Layout } from 'antd';
import { AppstoreAddOutlined, WechatOutlined } from '@ant-design/icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import BredCrumbItems from './BredCrumbItems';

const { Header, Content, Footer } = Layout;
const LayoutPost = ({
  edit, post, id, title,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
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
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <BredCrumbItems edit={edit} post={post} id={id} title={title} />
          {location.pathname === '/' ? (
            <Button
              onClick={() => {
                const locate = location.pathname === edit ? edit : '/addPost';
                navigate(locate);
              }}
              size="large"
              icon={<AppstoreAddOutlined />}
              style={{
                marginBottom: '1rem',
              }}
            >
              {location.pathname === edit ? 'Edit Post' : 'Add post'}
            </Button>
          ) : ''}
        </div>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ background: '#ffff' }}>USER BLOG</Footer>
    </Layout>
  );
};

export default LayoutPost;
