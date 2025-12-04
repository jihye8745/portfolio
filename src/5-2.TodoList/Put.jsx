import React, {useState} from 'react'

// 7. addTodo 함수는 부모에서 전달받아서 사용할거임
const Put = ({addTodo}) => {

  // 4-2. 인풋창에 입력되는 값 담아두기 / 초기값은 공백
  const [inputValue, setInputValue] = useState('')

  // 5. 추가하는 함수 만들기
  const add = ()=>{
    // 인풋이 공백이면 false / 내용이 있으면 true >> .trim( ) : 공백 정리해주는 함수
    if(inputValue.trim()){
      // 입력된 값이 있으면 입력값(inputValue)를 '할일목록 추가' 함수를 실행해라
      addTodo(inputValue)
      // inputValue 값은 다시 비워둬라
      setInputValue('')
    }
  }

  return (
    <div>
      {/* 4-1. 입력되는 값 가져옴  / 6. 내용이 바뀔 때 입력된값(event)의 value가 inputValue가 되라 */}
      <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
      {/* 2. 버튼을 클릭했을 때 추가되는 함수 넣어두기 */}
      <button type='button' onClick={add}>추가하기</button>
    </div>
  )
}

export default Put
