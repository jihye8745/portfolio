import React from 'react'

const Compo = () => {
  return (
    
    <div className="box">
      <h2>Title</h2>
      <p>contents</p>
      <img src="./mangomi.jpg" alt="망곰이" />
    </div>

    /* Component
    : html 덩어리를 하나의 단어로 축약

    컴포넌트의 장점
    - 코드 재사용성 향상 : 동일한 컴포넌트를 여러 곳에서 사용할 수 있다.
    - 유지보수 용이 : 각 컴포넌트는 독립적으로 관리되므로 수정이 쉽다.
    - 개발 효율성 : UI를 논리적인 단위로 나누어 개발할 수 있다.

    컴포넌트 설계 원칙
    - 단일 책임 원칙 : 각 컴포넌트는 하나의 기능만 담당해야 한다.
    - 재사용성 : 자주 사용되는 UI 요소는 컴포넌트로 만들어 재사용한다
    - 계층 구조 : 복잡한 UI를 작은 컴포넌트로 나누고 이를 조합하여 구성한다.

    함수형 컴포넌트 만들기
    : js 함수로 정의
    1. function 밖에서 만들기
      a. function 함수명 (){} / const 함수명 = ()=>{}
      b. return() 안에 html 담기
    2. 새로운 .jsx 파일로 만들기
      a. 함수 작성
      b. export default 함수명 >> 컴포넌트 내보내기(전송)
      c. import 함수명 from "경로" >> 컴포넌트 가져오기(호출)
      참고. 단축기 .rafce (확장프로그램 es7 설치)
      >> 함수명 첫글자는 대문자!!
    */
   
  )
}

export default Compo
