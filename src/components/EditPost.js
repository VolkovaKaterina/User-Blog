import React from 'react';
import {
  Button, Col, Form, List, Row, Typography,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';

const EditPost = ({
  selectPost, comments, setUserComment, editUserComment, userComment, deleteComment,
}) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (userComment.trim()) {
      editUserComment();
      setUserComment('');
    }
  };
  return (
    <Row gutter={[24, 24]}>
      <Col className="gutter-row" span={24}>
        <Typography.Title level={2}>
          {selectPost.title}
        </Typography.Title>
      </Col>

      <Col className="gutter-row" span={24}>
        <Typography.Paragraph>
          {selectPost.description}
        </Typography.Paragraph>
      </Col>
      <Col className="gutter-row" span={24}>
        <List
          bordered
        >
          {(!comments.length) ? (
            <List.Item>
              No comments
            </List.Item>
          ) : comments.map((comment) => (
            <List.Item
              key={comment.id}
              extra={<Button onClick={() => deleteComment(comment.id)}>Delete comment</Button>}
            >
              {comment.body}
            </List.Item>
          ))}

        </List>
      </Col>
      <Col className="gutter-row" span={24}>
        <Form>
          <Form.Item>
            <TextArea
              value={userComment}
              rows={4}
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={(event) => setUserComment(event.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={onFormSubmit} htmlType="submit" type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>

  );
};
export default EditPost;
