import React from 'react';
import { Row } from 'antd';

import Post from './Post';

const PostsList = ({ posts, setSelected }) => (
  <div
    className="post-container"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Row gutter={[24, 24]}>
      {posts.map(((post) => (
        <Post
          key={post.id}
          image={post.preview}
          title={post.title}
          author={post.author}
          post={post}
          setSelected={setSelected}
        />
      )))}
    </Row>
  </div>
);
export default PostsList;
