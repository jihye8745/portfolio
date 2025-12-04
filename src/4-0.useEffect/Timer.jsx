import React, {useState, useEffect} from 'react'

const Timer = () => {

  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(()=>{
    // console.log(count, run);
    let time;
    if(run){
      time = setInterval(()=>{
        setCount((prev) => prev+1)
      },1000)
    }
    return ()=> {
      clearInterval(time)
      console.log('타이머 끝!');
    }
  },[count, run]);

  const reset = ()=>{
    setCount(0);
    setRun(false);
  }

  return (
    <div>
      <h1>타이머 : {count}초</h1>
      <button type="button" onClick={()=>setRun(true)}>시작</button>
      <button type="button" onClick={()=>setRun(false)}>정지</button>
      <button type="button" onClick={reset}>초기화</button>
    </div>
  )
}

export default Timer
