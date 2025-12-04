import React from 'react'

const Dj = () => {
  let boxs = [
    {name: 'img01', img: './b1.png'},
    {name: 'img02', img: '/b2.png'},
    {name: 'img03', img: '/b3.png'},
    {name: 'img04', img: '/b4.png'},
    {name: 'img05', img: '/b5.png'},
    {name: 'img06', img: '/b6.png'},
    {name: 'img07', img: '/b7.png'},
    {name: 'img08', img: '/b8.png'},
    {name: 'img09', img: '/b9.png'},
    {name: 'img010', img: '/b10.png'},
    {name: 'img011', img: '/b11.png'},
    {name: 'img012', img: '/b12.png'},
    {name: 'img013', img: '/b13.png'},
    {name: 'img014', img: '/b14.png'},
  ];

  return (
    <section className='dj'>
      <div className="dj_i">
        <div className="title">
          <h2>DJ 스테이션</h2>
          <button type="button">테마</button>
        </div>
        
        <div className="contents">
          <h3>느낌별 스테이션</h3>
          <div className="allbox">
          {/* 
            [].map(function(a,b){})
            [].map(()=>{})
              1.array 자료 갯수만큼 함수 실행
              2. a >> 배열 안에 있는 모든 자료를 하나씩 출력
                 b >> 인덱스번호를 출력
              3. function(){return(해당 값으로 새로운 배열 만듬)}
          */}
          {boxs.map((item, index)=>{
            return (
              <Box img={item.img} name={item.name} key={index}/>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}

const Box = (props)=>{
  return(
    <div className="box">
      <img src={props.img} alt={props.name} />
    </div>
  )
}

export default Dj
