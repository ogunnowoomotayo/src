
 import React, {useState} from 'react';
 import TodoForm from './TodoForm'

 
 const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const AddTodo = todo => {

  }
   return (
     <div className='TodoWrapper'>
        <TodoForm addTodo = {addTodo} />
     </div>
   )
 };
 
 export default TodoWrapper;
 