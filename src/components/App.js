import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import {
  Routes, Route,
} from 'react-router-dom';
import {

  getPosts, getComments, editComment, remove, create, put,
} from '../api/apiRequest';
import PostsList from './PostsList';
import AddPost from './AddPost';
import Post from './Post';
import LayoutPost from './LayoutPost';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [comments, setComments] = useState({});
  const [userComment, setUserComment] = useState('');

  useEffect(async () => {
    const { data } = await getPosts();
    setPosts(data);
  }, []);

  useEffect(async () => {
    const { data } = await getComments(selectedPost.id);
    setComments(data);
  }, [selectedPost]);

  const editUserComment = async () => {
    const { data } = await editComment(selectedPost.id, { body: userComment });
    setComments([...comments, data]);
  };

  const editPost = async (post) => {
    await put(selectedPost.id, post);
    const { data } = await getPosts();
    setPosts(data);
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
    <Routes>
      <Route
        path="/"
        element={(
          <LayoutPost
            edit={`/edit:${selectedPost.id}`}
            post={`/post:${selectedPost.id}`}
            id={selectedPost.id}
            title={selectedPost.title}
          />
)}
      >
        <Route
          index
          element={(
            <PostsList
              posts={posts}
              setSelected={setSelectedPost}
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
          path="/edit:id"
          element={(
            <AddPost
              editPost={editPost}
              setSelectedPost={setSelectedPost}
            />
            )}
        />
        <Route
          path="/post:id"
          element={(
            <Post
              setSelectedPost={setSelectedPost}
              selectedPost={selectedPost}
              comments={comments}
              setUserComment={setUserComment}
              userComment={userComment}
              editUserComment={editUserComment}
              deleteComment={deleteComment}
            />
                      )}
        />
      </Route>
    </Routes>
  );
};

export default App;
