import React from 'react'

const Box4 = ({name, age, add, style}) => {
  return (
    <div  style={style}>
        <p>이름 : {name}</p>
        <p>나이 : {age}</p>
        <p>사는곳 : {add.country} / {add.city}</p>
    </div>
  )
}

export default Box4
