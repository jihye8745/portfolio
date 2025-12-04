import React from 'react'

const Header = () => {
  return (
    <header>
      <h1><a href="#">NAVER VIBE</a></h1>
      <button type='button' className='mem'>멤버십 구독</button>

      <nav>
        <ul className='menu1'>
          <li><a href="#">투데이</a></li>
          <li><a href="#">차트</a></li>
          <li><a href="#">최신앨범</a></li>
          <li><a href="#">DJ 스테이션</a></li>
          <li><a href="#">VIBE MAG</a></li>
          <li><a href="#">이달의 노래</a></li>
        </ul>
        <span className='line'></span>
        <ul className='menu2'>
          <li><a href="#">서비스 소개</a></li>
          <li><a href="#">내돈내들</a></li>
          <li><a href="#">VIBE 오디오</a></li>
          <li><a href="#">REWIND 2024</a></li>
          <li><a href="#">이용권 선물</a></li>
        </ul>
      </nav>

      <button type='button' className='desk'>데스크톱앱설치</button>
    </header>
  )
}

export default Header
