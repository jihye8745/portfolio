import React, {useState} from 'react'

// 카테고리 배열 받아옴
const Menubtn = ({categories, catClick}) => {

  return (
    <div>
      {/* 2. 카테고리 배열을 map 으로 돌려서 배열 안 요소 갯수만큼 버튼 생성 */}
      {categories.map((item, i)=>(
        // 5. 클릭했을 때 넘겨받은 catClick 함수가 실행되라
        <button type='button' key={i} onClick={()=> {catClick(item)}}>{item}</button>
      ))}
    </div>
  )
}

export default Menubtn
