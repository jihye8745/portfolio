import React from 'react'

const Box = (props) => {
  console.log("props:",props)

  let result;
  //컴퓨터 박스에 비김 아니고, 빈칸도 아니고, > 결과값이 반대로 나오게
  // 아니면 그대로 출력
  if(props.title === "Computer" && props.result !== "tie" && props.result !== ""){
    result = props.result === "win" ? "lose" : "win"
  } else {
    result = props.result
  }

  return (
    <div className={`box ${result}`}>
      <h2>{props.title}</h2>
      <img src={props.item && props.item.img} alt={props.item && props.name} />
      <h2>{result}</h2>
    </div>
  )
}

export default Box
