import React from 'react'

// 8. item 받기
const Mbox = ({item}) => {

  return (
    <div>
      <h3>{item.name}</h3>
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      <p>{item.description}</p>
      <h4>{item.price.toLocaleString()}원</h4>
      {/* .toLocaleString() : 국제규격 맞춰주는 함수 _ 가격 쉼표 */}
    </div>
  )
}

export default Mbox
