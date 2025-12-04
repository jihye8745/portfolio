import React from 'react'

const Box = (props) => {
  console.log('props:',props)
  return (
    <div className='box' style={{border:'1px solid red', width:'100px', height:'100px'}}>
      Box{props.num}
      <p>{props.name}</p>
    </div>
  )


  /*
  propx >> {name,num}
  {props.num} >> {num}
  {props.name} >> {name}
  */
}

export default Box
