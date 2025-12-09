import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProjecBtns = ({categories, catClick}) => {
  return (
    <div className='projectBtns'>
      <h3>Projects</h3>

      <Swiper pagination={true} modules={[Pagination]} className="project_category"
        breakpoints={{
          1025: {
            enabled: false,
          },
        }}
        slidesPerView="auto"
        spaceBetween={20}
      >
        {
        categories.map((item,i)=>(
          <SwiperSlide style={{width: 'auto'}} className='category_item'>
            <button type='button' className="c_item" key={i} onClick={()=>{catClick(item)}}>
              <figure><img src="/project/c_icon.png" alt="cicon" /></figure>
              {item}
            </button>
          </SwiperSlide>
        ))
      }
      </Swiper>
      
    </div>
  )
}

export default ProjecBtns
