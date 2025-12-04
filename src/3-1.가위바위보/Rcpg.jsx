import React, { useState } from 'react'
import Box from './Box'
import './Rcpg.css'

const Rcpg = () => {

  // 1. 박스 2개 (타이틀, 사진,결과)
  // 2. 가위 바위 보 버튼
  // 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
  // 4. 컴퓨터는 랜덤으로 선택
  // 5. 3,4의 결과에 따라 누가 이겼는지 승패
  // 6. 승패에 따라 박스 색이 바뀐다.

  const choice = {
    rock : {
      name : 'Rock',
      img : '/rock.jpeg'
    },
    scissors : {
      name : 'Scissors',
      img : '/scissors.jpg'
    },
    paper : {
      name : 'Paper',
      img : '/paper.jpg'
    }
  };

  const [userSelect, setUsetSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (useChoice)=>{
    console.log("선택됨", useChoice);
    setUsetSelect(choice[useChoice])

    let comChoice = randomChoice()
    setComSelect(comChoice)

    setResult(dicide(choice[useChoice], comChoice))
  };

  const randomChoice = ()=>{
    // Object.keys() : 객체 키값만 뽑아사 배열로 만듬
    let itemArray = Object.keys(choice)
    console.log("itemArray:", itemArray)

    // Math.random() : 랜덤으로 값을 받는 함수
    // Math.floor() : 소수점 아래 버림
    let randomItem = Math.floor(Math.random()*itemArray.length)
    console.log("random:", randomItem)

    let final = itemArray[randomItem]
    console.log('final:',final)

    return choice[final]
  }

  const dicide = (user, com)=>{
    console.log("user:", user, "com:",com)

    // user === com >> 비김 Tie
    // user === rock, com === scissors >> user 이김
    // user === rock, com === paper >> user 짐
    // user === scissors, com === rock >> user 짐
    // user === scissors, com === paper >> user 이김
    // user == paper, com === scissors >> user 짐
    // user == paper, com === rock >> user 이김

    // if(user.name === com.name){
    //   return "tie"
    // } else if (user.name === "rock"){
    //   if(com.name === "scissors"){
    //     return "win"
    //   } else {
    //     return "lose"
    //   }
    // }

    if(user.name === com.name){
      return "tie"
    } else if (user.name === "Rock")
        return com.name === "Scissors" ? "win" : "lose"
      else if (user.name === "Scissors")
        return com.name === "Paper" ? "win" : "lose"
      else if (user.name === "Paper")
        return com.name === "Rock" ? "win" : "lose"
  }

  

  

  return (
    <div>
      <div className="allbox">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={comSelect} result={result}/>
      </div>

      <div className="btns">
        <button type='button' onClick={()=>{play("scissors")}}>가위</button>
        <button type='button' onClick={()=>{play("rock")}}>바위</button>
        <button type='button' onClick={()=>{play("paper")}}>보</button>
      </div>
      
    </div>
  )
}

export default Rcpg
