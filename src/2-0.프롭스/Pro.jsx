import React from 'react'
import User from './User'
import Box from './Box'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
import Box6 from './Box6'

const Pro = () => {

  //2.
  const name = {name:'짱구', age: 25};
  //3.
  const handleClick = ()=> console.log('Clicked!!')
  //4.
  let person = {
    name: '짱구',
    age: 25,
    add : {
      country: '한국', city: '대구'
    },
    style : {
      fontWeight: '700',
      color: 'green'
    }
  };

  return (
    <div>
      {/* 

      props
      : properties(속성)
      부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법
      
      props 사용시 주의사항
      - props는 읽기 전용, 자식 컴포넌트에서 직접 수정 불가
      - props는 단방향 데이터 흐름을 유지해야함, 데이터는 항상 부모에서 자식으로 흘러야함
      - props의 타입을 검사하고 기본값을 설정하는 것이 좋음
      - 너무 많은 컴포넌트를 거쳐 props를 전달하는 것은 좋지 않음
      - 함수를 props로 전달할 때는 불필요한 리렌더링을 피하기 위해 useCallback 드을 사용해야함

      */}

      {/* <h2>망곰이</h2>
      <p>나이: 5</p>
      <p>아기곰입니다.</p> */}
      {/* <User/> */}
      

      {/* 1.기본값 전달(문자열, 숫자 등) */}
      <Box name='리사' num={1}/>
      <Box name='제니' num={2}/>
      <Box name='지수' num={3}/>

      {/* 2. 객체, 배열 전달 */}
      <Box2 name={name}/>
      
      {/* 3. 함수(이벤트 핸들러) 전달 */}
      <Box3 onClick={handleClick}/>

      {/* 4. 여러개의 props 한 번에 전달(스프레드 연산자) */}
      <Box4 {...person}/>

      {/* 5. 컴포넌트(children) 전달 */}
      {/* 컴포넌트를 넣을 때는 열고닫고를 해줘야함 */}
      <Box5><Box/></Box5>

      {/* 6. 기본값 설정 가능 */}
      <Box6/>


    </div>
  )
}

export default Pro
