import React from 'react'

// 필터링값 / 필터링 함수 / 완료항목 삭제 함수 받아오기
const Btns = ({filter, setFilter, clear}) => {
  return (
    <div>
      <button type='button'
      onClick={()=>{setFilter('all')}} disabled={filter === 'all'}>전체</button>

      <button type='button'
      onClick={()=>{setFilter('active')}} disabled={filter === 'active'}>진행중</button>

      <button type='button'
      onClick={()=>{setFilter('completed')}} disabled={filter === 'completed'}>완료</button>

      <button type='button'
      onClick={clear}>완료항목 삭제</button>
    </div>
  )
}

export default Btns
