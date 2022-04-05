import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {
  Routes, Route,
} from 'react-router-dom';
import {
  getPosts, getComments, editComment, remove, create,
} from '../api/apiRequest';
import PostsList from './postsList';
import AddPost from './AddPost';
import EditPost from './EditPost';
import LayoutPost from './LayoutPost';

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
    <Routes>
      <Route path="/" element={<LayoutPost post={`/post:${selectPost.id}`} id={selectPost.id} title={selectPost.title} />}>
        <Route
          index
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
          path="/post:id"
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
      </Route>
    </Routes>
  );
};

export default App;
