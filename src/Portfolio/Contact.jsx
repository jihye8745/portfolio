import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact_num">
        <h4>No.01</h4>
      </div>

      <div className="contact_title">
        <h2>★방문해주셔서 감사합니다★</h2>
        <p>
          사용자에게 더 나은 경험을 제공하는 웹퍼블리셔로 성장하겠습니다. <br/>
          새로운 기회를 기다리고 있습니다. 
        </p>
      </div>

      <div className="contact_info">
        <span>
          공새설정 : 전체공개
        </span>

        <div className="info">
          <div className="mail">
            <figure>
              <img src="/contact/mail.png" alt="mail" />
            </figure>
            <span>office_jihye@naver.com</span>
          </div>
          <div className="phone">
            <figure>
              <img src="/contact/phone.png" alt="phone" />
            </figure>
            <span>010-7446-8745</span>
          </div>
        </div>
      </div>

      <div className="contact_co">
        <span>반지수 : 곧 연락할게 기다려~ ♥</span>
        <span>권지혁 : 쪽지 확인해줘!!!!</span>
      </div>
    </div>
  )
}

export default Contact
