import React, {useState} from 'react'
import Header from './Header'
import Nbtns from './Nbtns'
import Nlist from './Nlist'
import './Style.css'

const News = () => {

  
  // 카테고리 선택 상태 담기
  const [category, setCategory] = useState("all");
  



  return (
    <div>
      <Header/>
      {/* 버튼 */}
      <Nbtns setCategory={setCategory} category={category}/>
      {/* 뉴스리스트 */}
      <Nlist category={category}/>
    </div>
  )
}

export default News
