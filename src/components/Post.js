import React from 'react';

import { Button, Card, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const Post = ({
  image, title, author, post, setSelected,
}) => {
  const navigate = useNavigate();
  return (
    <Col className="gutter-row" xs={24} md={12} lg={6}>
      <Card
        style={{
          borderRadius: '2%',
        }}
        hoverable
        cover={(
          <img
            alt={title}
            src={image}

          />
                )}
        extra={(
          <Button onClick={() => {
            setSelected(post);
            navigate(`/post:${post.id}`);
          }}
          >
            Edit
          </Button>
                )}
      >
        <Meta
          title={title}
          description={author}
        />
      </Card>
    </Col>
  );
};
export default Post;
