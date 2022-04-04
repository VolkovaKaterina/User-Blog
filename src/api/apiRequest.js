import api from './api';

export const getPosts = async () => api.get('/posts');

export const getPost = async (id) => api.get(`/posts/${id}`);

export const getComments = async (id) => api.get(`/posts/${id}/comments`);

export const editComment = async (id, data) => api.post(`/posts/${id}/comments`, data);

export const create = async (data) => api.post('/posts', data);

export const remove = (id) => api.delete(`/comments/${id}`);
