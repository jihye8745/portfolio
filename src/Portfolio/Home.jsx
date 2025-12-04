import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="post">
        <h3>최근게시물</h3>
        <div className="p_left">
          <ul>
            <li>
              <span>Project</span>
              <span>모머위켄드 웹 리디자인</span>
            </li>
            <li>
              <span>Project</span>
              <span>코엑스 클론코딩</span>
            </li>
            <li>
              <span>Project</span>
              <span>교통민원24 UIUX</span>
            </li>
          </ul>
        </div>
        <div className="p_right">
          <ul>
            <li>
              <span>쥬크박스 1</span>
              <span>사진첩 5</span>
            </li>
            <li>
              <span>즐겨찾기 3</span>
              <span>방명록 3</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="room">
        <h3>미니룸</h3>
          <div className="room_img">
            <figure>
              <img src="/home/miniroom.jpg" alt="room" />
            </figure>
          </div>
      </div>

      {/* ★★★TodoLIst 참고해서 댓글입력창 고민해보기★★★ */}
      <div className="comment">
        <h3>일촌평</h3>
        <div className="commet_text">
          <ul>
            <li>너의 노력과 열정.. 감동이야..★ 우리 오래가자 일촌 &#40;너의절친 권지연&#41;</li>
            <li>오늘도 최선을 다한 너를 위해 응원해!! ☆☆☆ &#40;광팬 고동학&#41;</li>
            <li>홈 쫌 예쁘다? 잘 보고 간다~♥ &#40;막내 김유경&#41;</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
