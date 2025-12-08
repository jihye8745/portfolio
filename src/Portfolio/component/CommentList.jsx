import React from 'react'

const CommentList = ({comment}) => {
  return (
    <ul className='commentList'>
      {
        comment.map((item)=>(
          <li key={item.id}>{item.inputValue}</li>
        ))
      }
      <li>너의 노력과 열정.. 감동이야..★ 우리 오래가자 일촌 &#40;너의절친 <span>권지연</span>&#41;</li>
      <li>오늘도 최선을 다한 너를 위해 응원해!! ☆☆☆ &#40;광팬 <span>고동학</span>&#41;</li>
      <li>홈 쫌 예쁘다? 잘 보고 간다~♥ &#40;막내 <span>김유경</span>&#41;</li>
    </ul>
  )
}

export default CommentList
