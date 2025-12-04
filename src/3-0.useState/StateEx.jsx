import React, { useState } from 'react'

const StateEx = () => {

  //1.
  const [num, setNum] = useState(0)

  //2.
  const [on, setOn] = useState(false)

  //3.
  let items = [
    {id: 1, name: 'apple', category: 'fruit'},
    {id: 2, name: 'tomato', category: 'vegetable'},
    {id: 3, name: 'banana', category: 'fruit'},
    {id: 4, name: 'carrot', category: 'vegetable'},
    {id: 5, name: 'melon', category: 'fruit'},
  ]

  const [select, setSelect] = useState('frute')
  const filterItem = items.filter(item => item.category === select);

  return (
    <div>
      {/* 1. */}
      {/* <h2>{num}</h2>
      <button type="button" onClick={()=>{setNum(num<10 ? num+1 : num)}}>증가</button>
      <button type="button" onClick={()=>{setNum(num>0 ? num-1 : num)}}>감소</button> */}

      {/* 2. */}
      {/* <div style = {{marginTop: '50px'}}>
        <button type="button" onClick={()=>{setOn(!on)}}>{on ? "off" : "on"}</button>
        <p>상태 : {on ? "on" : "off"}</p>
      </div> */}

      {/* 3 */}
      <div style = {{marginTop: '50px'}}>
        <h2>리스트</h2>
        <button type="button" onClick={()=>{
          setSelect('fruit')
          console.log(filterItem)}}>과일</button>
        <button type="button" onClick={()=>{
          setSelect('vegetable')}}>야채</button>
      </div>
      <ul>
        {filterItem.map((item)=>{
          return(
            <li key={item.id}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default StateEx
