import React from 'react'

const User = () => {

  const name = "망곰이"
  const age = 100
  const isAdult = age >= 19

  return (
    <div>
      <h2>{name}</h2>
      <p>나이: {age}</p>
      <p> {isAdult ? "어른곰입니다" : "아기곰입니다"}</p>
      {isAdult && <span>🍺 구매 가능</span>}

      {/* div에 직접 스타일을 줄 수있는데 있는데 style={ 여기 안에 객체 형태로 넣어야함 } */}
      <div style={{color: 'red', fontSize: '30px', fontWeight: '900'}}>스타일 예제</div>
    </div>
  )
}

export default User
