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
      <input name='com' type="text" placeholder="일촌평 남기기" value={inputValue}
      onChange={(event)=>setInputValue(event.target.value)}
      />

      <button type='button' onClick={add}>확인</button>
    </div>
  )
}
  
export default Put
