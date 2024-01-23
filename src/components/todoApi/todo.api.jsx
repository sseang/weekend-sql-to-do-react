import axios from 'axios';

export const fetchTodos = () => {
    return axios.get('/api/todo');
};

export const postTodos = (todoData) => {
    return axios.post('/api/todo', todoData);
};

export const updateTodos = (todoID) => {
    return axios.put(`/api/todo/${todoID}`);
};

export const deleteTodos = (todoID) => {
    return axios.delete(`/api/todo/${todoID}`);
};

