import React from 'react'

const Profile = () => {
  return (
    <div className='profile'>
      {/* top */}
      <div className="top">
        <div className="today">
          <span>Today is...</span>
          <figure>
            <img src="/common/t_icon.png" alt="tIcon" />
          </figure>
          <span>파이팅</span>
        </div>

        <div className="p_img">
          <figure>
            <img src="/common/profle.jpg" alt="profle" />
          </figure>
        </div>

        <div className="p_text">
          <h4>강지혜 &#40;Jihye&#41;</h4>
          <p>
            만나서 반ㄱr워요. <br/>
            ㄴr를 소개할게요 ^-^
          </p>
        </div>
        {/* //top */}

        {/* bottom */}
        <div className="bottom">
          <div className="history">
            <div className="h_left">
              <span>▶</span>HISTORY
            </div>
            <div className="h_right">
              ▼▲
            </div>
          </div>

          <div className="wave">
            <div className="w_text">
              ★일촌 파도타기
            </div>
            <div className="w_arrow">
              ▼
            </div>
          </div>
        </div>
        {/* //bottom */}
      </div>
    </div>
  )
}

export default Profile
