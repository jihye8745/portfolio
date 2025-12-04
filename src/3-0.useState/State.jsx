import React, { useState } from 'react'

const State = () => {
  
  let count = 0;
  const [num, setNum] = useState(0)
  // const [현재 상태값, 상태 업데이트를 위한 함수] = useState(상태초기값)
  // import React, 뒤에 {useState} 가 있어야함


  const plus = ()=>{
    count = count + 1
    setNum(num + 1);
    console.log("count: ", count, "num", num);
  };
  // 1. 버튼을 클릭
  // count + 1 >> 1
  // setState 함수 호출
  // console 실행
  // 함수 종료
  // 함수 리렌더됨
  // 일반변수는 count = 0 이 됨 / state 값은 > 1이 됨
  // ui 리렌더 >> 변수값을 보여줌

  return (
    <div>
      <div>일반변수 : {count}</div>
      <div>state : {num}</div>
      <button type='button' onClick={plus}>클릭!</button>
    </div>
  )
}

export default State
