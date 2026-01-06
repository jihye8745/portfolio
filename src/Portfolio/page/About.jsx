import React from 'react'

const About = () => {

  const skills = [
    {
      id: 1,
      img: "/about/s1.png",
      keywords : ["HTML", "CSS"],
      text : "웹 표준·웹 접근성 고려한 마크업 작성 가능, 반응형 구현 가능"
    },
    {
      id: 2,
      img: "/about/s2.png",
      keywords : ["JS"],
      text : "기본 문법 이해 및 이벤트 처리, DOM 조작 구현 가능"
    },
    {
      id: 3,
      img: "/about/s3.png",
      keywords : ["jQuery"],
      text : "요소 제어 및 슬라이드·탭 등 UI 스크립트 구현 가능"
    },
    {
      id: 4,
      img: "/about/s4.png",
      keywords : ["React"],
      text : "컴포넌트 단위 구조 이해, 간단한 SPA 페이지 구현 가능"
    },
    {
      id: 5,
      img: "/about/s5.png",
      keywords : ["Git·GitHub"],
      text : "git 명령어를 사용해 GitHub에서 프로젝트 버전 관리 및 협업 가능"
    },
    {
      id: 6,
      img: "/about/s6.png",
      keywords : ["Figma"],
      text : "컴포넌트·레이아웃 구조 이해 및 반응형 웹 시안 분석 가능"
    },
    {
      id: 7,
      img: "/about/s7.png",
      keywords : ["PS", "AI"],
      text : "누끼, 보정, 리사이징 기본편집 가능"
    },
  ]

  return (
    <div className='about'>
      {/* aboutme */}
      <div className="aboutMe">
        <div className="title">
          <h4>About me</h4>
        </div>
        <div className="about_contents">
          <figure>
            <img src="/about/profile.jpg" alt="a_img" />
          </figure>
          <div className="text">
            <h2>안녕하세요.<br/>웹퍼블리셔 강지혜입니다.</h2>
            <p>
              저는 배움을 주저하지 않고 꾸준히 도전하는 사람입니다. <br/>
              HTML, CSS, 반응형, 웹 접근성 등 기초가 탄탄한 퍼블리셔로서 요구사항을 정확히 파악하고 사용자 중심의 신뢰할 수 있는 결과물을 만들기 위해 꾸준히 노력하겠습니다.
            </p>
          </div>
        </div>
      </div>
      {/* //aboutme */}

      {/* skill */}
      <div className="skill">
        <div className="title">
          <h4>Skill</h4>
        </div>
        <div className="skill_contents">
          <ul>
          {
            skills.map((skill)=>(
             <li key={skill.id}>
              <figure>
                <img src={skill.img} alt={"s" + skill.id} />
              </figure>
              <div className="text">
                <div className="keyword">
                  {skill.keywords.map((keyword,i)=>(
                    <span key={i}>{keyword}</span>
                  ))}
                </div>
                <span>{skill.text}</span>
              </div>
            </li> 
            ))
          }
          </ul>
        </div>
      </div>
      {/* //skill */}

      <div className="detail">
        {/* license */}
        <div className="license">
          <div className="title">
            <h4>License</h4>
          </div>
          <div className="lic_contents">
            <ul>
              <li>웹디자인개발기능사</li>
              <li>컵퓨터그래픽기능사</li>
              <li>컴퓨터활용능력2급</li>
              <li>GTQ일러스트1급</li>
              <li>그래픽기술자격&#40;GTQ&#41; 1급</li>
            </ul>
          </div>
        </div>
        {/* //license */}
        
        {/* experience */}
        <div className="experience">
          <div className="title">
            <h4>Experience</h4>
          </div>
          <div className="exp_contents">
            <div className="sub_title learn">
              <span>Learning</span>
              <ul>
                <li>
                  <span>웹 퍼블리싱 UI·UX 심화 과정</span>
                  <span>2025.06</span>
                </li>
                <li>
                  <span>웹퍼블리싱 기초 과정</span>
                  <span>2025.01</span>
                </li>
              </ul>
            </div>
            <div className="sub_title work">
              <span>Work Experience</span>
              <div className="work_info">
                <span>기획/마케팅분야</span>
                <span>2020~2024</span>
              </div>
              <ul>
                <li>일정관리·커뮤니케이션 기반 프로젝트 운영 경험</li>
                <li>웹 서비스 운영 흐름에 대한 이해 보유</li>
              </ul>
            </div>
          </div>
        </div>
        {/* //experience */}
      </div>
      
    </div>
  )
}

export default About
