import React, {useState} from 'react'
import Menubtn from './Menubtn'
import Mbox from './Mbox'

const Menu = () => {

   const menus = [
    { id: 1, name: '에스프레소', category: 'coffee', price: 4500, description: '기본 중의 기본 에스프레소', img: "/img-1.jpg" },
    { id: 2, name: '레몬 로마노', category: 'coffee', price: 5500, description: '첫맛과 끝 맛이 다른 레몬과육 에스프레소', img: "/img-2.jpg" },
    { id: 3, name: '크림 콘파나', category: 'coffee', price: 5500, description: '직접 담근 바닐라설탕으로 만든 크림과 에스프레소', img:"/img-3.jpg"},
    { id: 4, name: '카페프로즌', category: 'coffee', price: 5500, description: '에스프레소와 라임 슬러시', img:"/img-4.jpg"},
    { id: 5, name: '체리 블러드', category: 'coffee', price: 6500, description: '체리 슬러쉬, 체리 절임, 에스프레소', img:"/img-5.jpg"},
    { id: 6, name: '카페 아일랜드', category: 'coffee', price: 6500, description: '우유, 말차 아이스크림과 에스프레소', img:"/img-6.jpg"},
    { id: 7, name: '코르타도', category: 'coffee', price: 5500, description: '스페인식 라떼', img:"/img-7.jpg"},
    { id: 8, name: '카페 봉봉', category: 'coffee', price: 5500, description: '스페인식 연유커피', img:"/img-8.jpg" },
    { id: 9, name: '카페 스노우', category: 'coffee', price: 6000, description: '차갑고 부드러운 우유 거품과 에스프레소', img:"/img-9.jpg" },
    { id: 10, name: '카페 하이디', category: 'coffee', price: 6500, description: '생민트와 우유 슬러시 그리고 에스프레소', img:"/img-10.jpg"},
    { id: 11, name: '무슈카이막', category: 'dessert', price: 13000, description: '천상의 맛 유제품 디저트 카이막, 바게트, 꿀', img:"/img-11.jpg" },
    { id: 12, name: '티라미수', category: 'dessert', price: 7500, description: '부드럽고 에스프레소의 진한 향미가 느껴지는 케이크', img:"/img-12.jpg" },
    { id: 13, name: '퓨어치즈케이크', category: 'dessert', price: 7000, description: '겨울시즌메뉴', img:"/img-13.jpg"},
    { id: 14, name: '무슈선데 바질토마토', category: 'ice cream', price: 6500, description: '우유 아이스크림과 새콤 달콤 바질 토마토 절임', img:"/img-14.jpg" },
    { id: 15, name: '무슈선데 코코넛', category: 'ice cream', price: 6500, description: '코코넛 아이스크림, 후르츠 칵테일', img:"/img-15.jpg" },
    { id: 16, name: '무슈선데 팥&마차', category: 'ice cream', price: 7000, description: '말차 아이스크림과 달콤한 팥', img:"/img-16.jpg"},
    { id: 17, name: '시즌에이드', category: 'beverage', price: 6500, description: '시즌별 신선하고 다양한 청을 이용한 에이드', img:"/img-17.jpg" },
  ]

  // 3. 카테고리 선택 상태 담기 (선택된 카테고리)
  const [category, setCategory] = useState("All")

  // 1. All 과 menus 배열의 객체중 category만 가져와서 새로운 배열 만듬(중복되는 카테고리 제외 new Set())
  const categories = ["All", ...new Set(menus.map(item => item.category))]

  // 4. (클릭했을 때) 카테고리 상태가 변하는 함수 만들기
  const catClick = (item)=>{
    setCategory(item)
  }

  // 6. 해당하는 카테고리에 해당하는 객체만 가져와지는 필터함수 만들기
  // <카테고리>가 All 이면 menus 객체 다 가져오고, 아니면 menus의 카테고리가 <카테고리>와 같은 것만 가져옴
  const filteredMenu = category === "All" ? menus : menus.filter(menu => menu.category === category)

  return (
    <div>
      <h1>메뉴</h1>
      {/* 카테고리 배열 넘겨줌 / 클릭함수 넘겨줌 */}
      <Menubtn categories={categories} catClick={catClick}/>

      <div className="menuList">
        {/* 7.필터되는 객체 갯수 만큼 Mbox 만들기 / 키값과 필터된 객체(item) 넘겨주기 */}
        {filteredMenu.map((item)=>(
          <Mbox key={item.id} item={item}/>
        ))}
      </div>
      
    </div>
  )
}

export default Menu
