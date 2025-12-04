import React from 'react'

const Side = () => {
  return (
    <div id='side'>
      <div className="tab">
        <span>친구추천</span>
        <span>팬</span>
      </div>

      <div className="side_contents">
        <div className="rel">
          우리는 이미 <span>일촌</span>
        </div>
        <div className="per">
          <div className="friendly">
            <span>프랜들리</span>
            <div className="bar">
              <div className="f_inner"></div>
            </div>
          </div>
          <div className="teamwork">
            <span>팀워크</span>
            <div className="bar">
              <div className="t_inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Side
