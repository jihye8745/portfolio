import React, {useState, useEffect} from 'react'
import Timer from './Timer'

const Lc = () => {
    // useEffect() : 함수형 컴포넌트에서 라이프사이클을 주기위한 함수

  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  const [showTimer, setShowTimer] = useState(true);


  const plus = ()=>{
    setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // 이전 값을 받아와서 누적되게 사용도 가능함
    setValue((prev)=>prev+1)
    // setValue((prev)=>prev+1)
    // setValue((prev)=>prev+1)
  }

  // 1.앱시작
  // useEffect(()=>{콜백함수}, [배열])
  useEffect(()=>{
    console.log('시작!!')
    // 앱초기작업들, api 호출
  }, [])
  // 렌더가 끝나면 자동으로 호출

  // 2. 실행중
  useEffect(()=>{
    console.log("업데이트")
  },[count])

  useEffect(()=>{
    console.log("다른일")
  },[value])


  // 3. 앱 종료
  // useEffect(()=>{
  //   const timer = setInterval(()=>{
  //     console.log('타이머 실행')
  //   }, 1000)

  //   return ()=>{
  //     clearInterval()
  //     console.log("타이머 끝")
  //   }
  // },[])

  return (
    <div>
      {console.log('렌더')}
      <h1>{count}</h1>
      <h2> value : {value}</h2>
      <button type='button' onClick={plus}>증가</button>

      <button type="button" onClick={()=>{setShowTimer((prev)=> !prev)}}>Show Timer</button>

      {showTimer && <Timer/>}
    </div>
  )
}

export default Lc
