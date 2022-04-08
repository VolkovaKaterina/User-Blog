import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const BredCrumbItems = ({
  edit, post, id, title,
}) => {
  const breadcrumbNameMap = {
    '/addPost': 'Add new post',
    [post]: `Comment post ${id} ${title}`,
    [edit]: `Edit post ${id} ${title}`,

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

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItems}
    </Breadcrumb>
  );
};
export default BredCrumbItems;
