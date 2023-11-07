import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const urls = {
  register: 'users',
  posts: 'posts'
}

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    params,
    headers,
    data
  };

  const response = await axios(options);
  return response?.data;
};

export const createUser = (user) => {
    return callAPI(urls.register, 'POST', {}, {}, user)
}

export const loginUser = async (user) => {
  const response = await callAPI(urls.register, 'GET');i
  const users = response?.users;

  const foundUser = users.find(u => u.email === user.email && u.password === user.password);

  if (foundUser) {
    return foundUser;
  } else {
    throw new Error('Email atau password salah');
  }
}

export const getUserById = (userId) => {
  return callAPI(`${urls.register}/${userId}`, 'GET');
}

export const getAllPost = () => {
  return callAPI(urls.posts, 'GET');
}

export const getPostById = (postId) => {
  return callAPI(`${urls.posts}/${postId}`, 'GET');
}

export const createPost = (post) => {
  return callAPI(urls.posts, 'POST', {}, {}, post)
}