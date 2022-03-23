import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb, Button } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';

const BredCrumbItems = ({ id, title }) => {
  const breadcrumbNameMap = {
    '/addPost': 'Add new post',
    '/editPost': `Edit Post ${id} ${title}`,
  };
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">All Posts</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  const navigate = useNavigate();
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumbItems}
      </Breadcrumb>
      <Button
        onClick={() => { navigate('/addPost'); }}
        size="large"
        icon={<AppstoreAddOutlined />}
        style={{
          marginBottom: '1rem',
        }}
      >
        Add post
      </Button>
    </div>
  );
};
export default BredCrumbItems;
