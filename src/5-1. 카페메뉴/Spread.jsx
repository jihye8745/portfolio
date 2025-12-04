import React, {useState} from 'react'

const Spread = () => {

  // 스프레드 연산자(...)
  //  : 배열이나 객체를 그대로 복사하거나, 새로운 값을 추가할 때 사용
  // react 에서는 state를 직접 수정하면 안되기 때문에, state를 안전하게 업데이트 하기 위혀서 스프레드를 사용해 새로운 객체나 배열을 만들어 업데이트

  const [user, setUser] = useState({name:'아람', age:'30', sex:'female'})
  const [array, setArray] = useState([5,3,8,6])

  function add () {
    setUser({...user, city: '대구'})
    setArray([...array, 8, 5])
  }

  console.log('user:',user, "array:", array)

  return (
    <div>
      <button type="button" onClick={add}>추가</button>
    </div>
  )
}

export default Spread
