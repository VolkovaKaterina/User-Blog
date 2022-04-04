import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  Routes, Route,
} from 'react-router-dom';
import { WechatOutlined } from '@ant-design/icons';
import {
  getPosts, getComments, editComment, remove, create,
} from '../api/apiRequest';
import PostsList from './postsList';
import AddPost from './AddPost';
import EditPost from './EditPost';
import BredCrumbItems from './BredCrumbItems';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState({});
  const [comments, setComments] = useState({});
  const [userComment, setUserComment] = useState('');

  useEffect(async () => {
    const { data } = await getPosts();
    setPosts(data);
  }, []);

  useEffect(async () => {
    const { data } = await getComments(selectPost.id);
    setComments(data);
  }, [selectPost]);

  const editUserComment = async () => {
    const { data } = await editComment(selectPost.id, { body: userComment });
    setComments([...comments, data]);
  };
  const deleteComment = async (id) => {
    await remove(id);
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const createPost = async (post) => {
    const { data } = await create(post);
    setPosts([...posts, data]);
  };

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
        <BredCrumbItems post={`/:${selectPost.id}`} id={selectPost.id} title={selectPost.title} />
        <div className="site-layout-content" style={{ padding: '20px 20px' }}>
          <Routes>
            <Route
              path="/"
              element={(
                <PostsList
                  posts={posts}
                  setSelected={setSelectPost}
                />
)}
            />
            <Route
              path="addPost"
              element={(
                <AddPost
                  createPost={createPost}
                />
)}
            />
            <Route
              path=":id"
              element={(
                <EditPost
                  setSelectPost={setSelectPost}
                  selectPost={selectPost}
                  comments={comments}
                  setUserComment={setUserComment}
                  userComment={userComment}
                  editUserComment={editUserComment}
                  deleteComment={deleteComment}
                />
)}
            />
          </Routes>
        </div>
      </Content>
      <Footer style={{ background: '#ffff' }}>USER BLOG</Footer>
    </Layout>
  );
};

export default App;
