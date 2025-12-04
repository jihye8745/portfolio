import React from 'react'

const Item = ({todo, toggleTodo, delet}) => {
  return (
    <div>
      <li>
          <input type="checkbox" onChange={()=>toggleTodo(todo.id)}/>
          <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.inputValue}</span>
          <button type="button" onClick={()=> delet(todo.id)}>X</button>
        </li>
    </div>
  )
}

export default Item
