import React from 'react'
import {Routes, Route} from 'react-router'
import Main from './Main'
import About from './About'
import Nav from './Nav'
import Product from './Product'

const Router = () => {

  /*
  라우터(Router)
  : React에서 페이지 간 이동(라우팅)을 처리하기 위해 사용되는 라이브러리
  React는 기본적으로 SPA 작동 방식으로 동작하므로  url이 변경되더라도 전체 페이지를 새로고침 하지 않고
  필요한 부분만 업데이트 한다. 이를 통해 빠르고 부드러운 사용자 경험을 제공한다.
  url 경로에 따라 특정 컴포넌트를 렌더링하여 여러 페이지처럼 보이도록 구현

  0. react router 검색 후 설치 
  Docs > Declarative Mode > Installation > 설치방법 확인
  내 프로젝트 폴더 안에서 npm i react-router 설치
  (새로운 프로젝트 마다 라이브러리 설치 필요)


  1. 기본설정 :  main.jsx >> 해당 파일에서 BrowserRouter 앱 감싸기
  <BrowserRouter>
     <App />
    </BrowserRouter>,

  (import 까먹지 말기)
  import { BrowserRouter } from "react-router";

  >> 렌더링되는 컴포넌트를 url을 관리할 수 있도록 도와주는 컴포넌트

----------------------------------------------------------------------------
  2. 라운딩 구현
  Routes, Route 컴포넌트를 사용하여 url경로에 따라 다른 컴포넌트 렌더링

  Routes : 여러 Route를 감싸는 컨테이너
  Route : 특정 경로(path)에 매칭될 때 렌더링할 컴포넌트 지정

  (import 까먹 말기)
  import { Route, Routes } from 'react-router'

  (작성방법)
  <Routes>
     < Route path='경로' element={렌더링할 컴포넌트} />
  </Routes>
  
  >>  path:='/' 제일 첫 화면


----------------------------------------------------------------------------
  3. 페이지 이동방식 2가지

  (1) Link : 눌러서 바로 이동  >> Nav 컴포넌트 참고
  (2) useNavigate : 어떤 함수 안에서 사용할 때 >> About 버튼 참고

  >> 사용방법
  홈페이지 navigating > Link / useNavigate 참고
  

  */

  return (
    <div>
     
     <header>
      <Nav/>
     </header>

     <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
      
      
     </Routes>
     
    </div>
  )
}

export default Router
