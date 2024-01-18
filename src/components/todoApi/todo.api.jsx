import axios from 'axios';

export const fetchTodos = () => {
    return axios.get('/api/todo');
};

export const postTodos = (todoData) => {
    return axios.post('/api/todo', todoData)
};
