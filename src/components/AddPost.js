import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Input, Typography,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';

const AddPost = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      author,
      description,
      preview,
      title,
    };
    createPost(newPost);
    navigate('/');

    setTitle('');
    setAuthor('');
    setPreview('');
    setDescription('');
  };
  return (
    <Form
      size="large"
      required
    >
      <Form.Item>
        <Typography.Title level={4}>Title</Typography.Title>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="post title"
        />
      </Form.Item>
      <Form.Item>
        <Typography.Title level={4}>Description</Typography.Title>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="post description"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <Form.Item>
        <Typography.Title level={4}>Preview</Typography.Title>
        <Input
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
          required
          placeholder="Link to the preview image"
        />
      </Form.Item>
      <Form.Item>
        <Typography.Title level={4}>Author</Typography.Title>
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="author name"
        />
      </Form.Item>
      <Form.Item>
        <Button
          onClick={onFormSubmit}
          htmlType="submit"
          type="primary"
          size="large"
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddPost;
