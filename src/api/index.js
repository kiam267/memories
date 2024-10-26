import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  // headers: {
  //   'Content-Type': 'application/json',
  //   // Authorization: 'Bearer YOUR_JWT_TOKEN',
  // },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
})


const url = 'http://localhost:5000/posts';

// Get Data From Server
export const fetchPosts = () => API.get(url);

// Post Data From Server
export const createPost = newPost => API.post(url, newPost);

// Patch Data From Server
export const updatePost = (id, updatePost) =>
  API.patch(`${url}/${id}`, updatePost);

// Delete Data From Server
export const deletePost = id => API.delete(`${url}/${id}`);

export const likePost = id => API.patch(`${url}/${id}/likePost`);

export const signin = fromData =>
  API.post('http://localhost:5000/users/', fromData);
export const signup = (fromData) => API.post("/users/signup", fromData)
