import React, {useState} from 'react'

const Put = ({addComment}) => {

  const [inputValue, setInputValue] = useState();

  const add = ()=>{
    if(inputValue.trim()){
      addComment(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className='put'>
      <span>답글</span>
      <input type="text" value={inputValue}
      onChange={(event)=>setInputValue(event.target.value)}
      />

      <button type='button' onClick={add}>확인</button>
    </div>
  )
}
  
export default Put
