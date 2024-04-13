import React, {useState, usestate} from 'react'

const TodoForm = () => {
    const[value, setValue]  = useState("")

    const HandleSubmit = e => {
      e.preventDefault();

      console.log(value)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type = "text" className='todo-input'
        placeholder='what is the task today?' onChange=
        {(e) => setValue(e.target.value)}/>
        <button type = 'submit' className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm
