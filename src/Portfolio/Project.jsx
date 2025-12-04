import React from 'react'

const Project = ({filterProject}) => {
  return (
    <div className='projectList'>
      {
        filterProject.map((item,i)=>(

          <div className="p_item" key={i}>

            <div className="headline">
              <span>{item.project}</span>
            </div>

            <div className="p_contents">
              <figure>
                <img src={item.img} alt={item.project} />
              </figure>
              <div className="text">
                <h3>{item.category}</h3>
                <div className="info">
                  <span>기간: {item.period}</span>
                  <span>기여도: 100%</span>
                </div>
                <p>{item.description}</p>
                <div className="btns">
                  {
                    item.btns.map((btn, i)=>(
                      <a href={btn.outlink} key={i} className='btn' target="_blank">
                        {btn.name}
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Project
