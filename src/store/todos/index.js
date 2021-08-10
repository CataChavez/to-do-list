import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { onAddTodo } from '../../store/todo/actions'
function App() {
const dispatch = useDispatch()
const handlerClick = ({target}) => {
dispatch(onAddTodo(target.value))
}
return (
<div className="App">
<div>Add item</div>
<input onClick={onAddTodo} type="text" placeholder="Add an
item"/>
</div>
);
}
export default App;