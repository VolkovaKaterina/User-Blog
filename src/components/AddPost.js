import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button, Form, Input, Typography,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { getPost } from '../api/apiRequest';

const AddPost = ({ createPost, editPost, setSelectPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();
  if (id) {
    const postId = id.replace(':', '');
    useEffect(async () => {
      const { data } = await getPost(postId);
      setSelectPost(data);
      setTitle(data.title);
      setAuthor(data.author);
      setPreview(data.preview);
      setDescription(data.description);
    }, [postId]);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      author,
      description,
      preview,
      title,
    };
    const action = id ? editPost : createPost;
    action(newPost);
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
          {id ? 'Update' : 'Create'}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddPost;
