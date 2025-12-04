import React from 'react'

const Nbtns = ({setCategory, category}) => {

  const categories = [
    {name : 'all', text:'전체'},
    {name: 'business', text: '비즈니스'},
    {name: 'entertainment', text: '엔터'},
    {name: 'general', text: '일반'},
    {name: 'health', text: '건강'},
    {name: 'science', text: '과학'},
    {name: 'sports', text: '스포츠'},
    {name: 'technology', text: '기술'},
  ]

  return (
    <div>

     {categories.map((s)=>(
       <button type="button" key={s.name}
       onClick={()=>setCategory(s.name)}
       className={category === s.name ? "active" : ""}
       >{s.text}</button>
     ))}
    </div>
  )
}

export default Nbtns
