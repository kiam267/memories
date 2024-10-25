import axios from 'axios';

const url = 'http://localhost:5000/posts';

// Get Data From Server
export const fetchPosts = () => axios.get(url);

// Post Data From Server
export const createPost = newPost => axios.post(url, newPost);

// Patch Data From Server
export const updatePost = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

// Delete Data From Server
export const deletePost = id => axios.delete(`${url}/${id}`);

export const likePost = id => axios.patch(`${url}/${id}/likePost`);
