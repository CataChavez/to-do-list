
import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    } from './types';
    export const addTodo = ({ title, userId }) => {
    return async dispatch => {
    dispatch(addTodoStarted());
    try {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    title,
    userId,
    completed: false
    })
    };
    const res = await
    fetch(`https://jsonplaceholder.typicode.com/todos`,
    requestOptions)
    dispatch(addTodoSuccess(res.data));
    }
    catch(err => {
    dispatch(addTodoFailure(err.message));
    });
    };
    };
    const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
    ...todo
    }
    });
    const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
    });
    const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
error
}
});