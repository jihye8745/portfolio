import React from 'react'
import Item from './Item'

const List = ({filterTodo, toggleTodo, delet}) => {
  return (
    <div>
      <ul>
        
        {filterTodo.map((todo)=>(
          <Item key={todo.id} todo={todo} toggleTodo={toggleTodo} delet={delet}/>
        ))}
        
      </ul>
    </div>
  )
}

export default List
