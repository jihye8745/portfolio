import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Btns from './Btns'
import Profile from './Profile'
import ProjectBtns from './ProjectBtns'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import './style.css'


const Main = () => {

 const params = useParams();

 const currentSub = params.subPage || 'profile';
 const currentMain = params.mainPage || 'home';

  const projects = [
    {
      id: 1,
      project : "Main Project",
      category : "모머위켄드 웹 리디자인",
      period : "2025.08.04~ 08.20",
      description : "식기 브랜드 메인, 서브1, 서브2 페이지 기획·리디자인 및 반응형웹 작업",
      img : "/project/p1.jpg",
      btns : [
        {name: "기획안", outlink: "/project/momur.pdf"},
        {name: "사이트", outlink: "https://jihye8745.github.io/momur/"},
        {name: "코드", outlink: "https://github.com/jihye8745/momur.git"}
      ]
    },
    {
      id: 2,
      project : "Clone Project",
      category : "코엑스 클론코딩",
      period : "2025.11.11~ 11.14",
      description : "코엑스 랜딩페이지 반응형웹 클론코딩 작업",
      img : "/project/p2.jpg",
      btns : [
        {name: "사이트", outlink: "https://jihye8745.github.io/coexClone/"},
        {name: "코드", outlink: "https://github.com/jihye8745/coexClone.git"},
      ]
    },
    {
      id: 3,
      project : "UIUX Project",
      category : "교통민원24 UIUX",
      period : "2025.10.01~ 10.25",
      description : "공공앱 교통민원24 UIUX 리디자인 작업",
      img : "/project/p3.jpg",
      btns : [
        {name: "기획안·디자인", outlink: "/project/UIUX.pdf"}
      ]
    },
    {
      id: 4,
      project : "Portfolio Project",
      category : "포트폴리오",
      period : "2025.11.17~ 12.05",
      description : "사이트 기획·디자인 및 리액트 기반 반응형웹 작업",
      img : "/project/p4.jpg",
      btns : [
        {name: "사이트", outlink: "https://jihye8745.github.io/portfolio/"},
        {name: "코드", outlink: "https://github.com/jihye8745/portfolio.git"},
      ]
    },
  ]

  let categories = ["전체보기", ...projects.map(item=>item.category)]

  const [category, setCategory] = useState("전체보기")

  const catClick = (item)=>{
    setCategory(item)
  }

  const filterProject = category === "전체보기" ? projects : projects.filter(project => project.category === category);



  return (
    <div id='main'>
      {/* sub_contents */}
      <div className="subContents">
        <div className="s_line">
          <div className="s_bg">
            <div className="t_title">
              <h2>익숙함 보다는 성장을 선택하는 사람</h2>
             </div>
            <div className="s_text">
              <span>TODAY <strong className='orange'>1000</strong></span>
              <span>TOTAL <strong>123456</strong></span>
            </div>
            <div className="s_inner">
              {currentSub === 'profile' && <Profile/>}
              {currentSub === 'projectbtns' && <ProjectBtns categories={categories} catClick={catClick}/>}
            </div>
          </div>
        </div>
      </div>
      {/* //sub_contents */}

      {/* deco */}
      <div className="deco">
        <div className="d_box">
          <div className="d_item"></div>
          <div className="d_item"></div>
        </div>
        <div className="d_box">
          <div className="d_item"></div>
          <div className="d_item"></div>
        </div>
      </div>
      {/* //deco */}

      {/* main_contents */}
      <div className="mainContents">
        <div className="m_line">
          <div className="m_bg">
            <div className="m_title">
              <h2>익숙함 보다는 성장을 선택하는 사람</h2>
             </div>
            <div className="m_inner">
              {currentMain === 'home' && <Home/>}
              {currentMain === 'about' && <About/>}
              {currentMain === 'project' && <Project filterProject={filterProject}/>}
              {currentMain === 'contact' && <Contact/>}
            </div>
          </div>
        </div>
      </div>
      {/* //main_contents */}

      {/* main_btns */}
      <Btns/>
      {/* //main_btns */}
    </div>
  )
}

export default Main
