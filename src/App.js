import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 박스 2개(타이틀, 사진, 결과값)
//2. 가위바위보 버튼
//3. 버튼 클릭시, 클릭값이 박스에 표시(state)
//4. 컴푸터: 랜덤값 표시
//5. 3-4결과로 승패 정하기
//6. 승패 결과에 따라 > 테두리색 변경(win-초록, lose-빨강, tie-회색) - 유저/컴퓨터 못함

const choice ={ //가위바위보 버튼 디자인 생성
  rock:{
    name:"Rock",
    img:"https://i.namu.wiki/i/zOvIXls5rx-u6-ORWFkn0N3Vv_lc_TUOedQbLwNXUdvwbbsY-TcKkvUfJFfoDoG0gIS3f1OzqpeG_k_aVzGTIcviE2r8RFJbd0zFa-plD4C0uXMgjX294PFXkpq7NUMoqTeoU6Fenw1yBy-2zAypIA.webp"
  },
  scissors:{
    name:"Scissors",
    img:"https://cdn.imweb.me/upload/S20221129c3c04fdc67a8b/dc0cd7a8f1420.jpeg"
  },
  paper:{
    name:"Paper",
    img:"https://i.namu.wiki/i/mV-ex76BfH1vHmkLA73Z9Q4AvxRPwFAJCAV3DYoEUh_t5rSommLSDNi-1jWT1hsklZRQSvPw7rro2aSBv94DCKB1AJwKU4agbsPPEq4xGI5uY5mx1QO2u-h3Pc4-T2wZyWzkl9FcUdW5M54GmL1j1A.webp"
  }
}

function App() {
  //클릭값 표시(state)
  const [userSelect, setUserSelect] =useState(null)
  const [computerSelect, setComputerSelect] =useState(null) 
  const [result, setResult] =useState("") //result

  //유저 클릭시, 컴퓨터도 랜덤하게 무언가 호출 
  const play = (userChoice) => { //버튼 클릭 이벤트
    //console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice)) //setResult
  }

  //유저 결과값 
  const judgement = (user,computer) => {
    //console.log("user",user,"com", computer)

    if(user.name==computer.name){
      return "tie"
    }else if(user.name == "Rock"){
      return computer.name == "Scissors"? "win" : "lose"
    }else if(user.name == "Scissors"){
      return computer.name == "Paper"? "win" : "lose"
    }else if(user.name == "Paper"){
      return computer.name == "Rock"? "win" : "lose"
    }
  }


  //컴퓨터 결과값
  const randomChoice = () => {
    let itemArray = Object.keys(choice) //객체의 키값을 배열로 만들어주는 애
    // console.log("itemArray", itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length)
    // console.log("randomItem", randomItem)
    let final = itemArray[randomItem]
    console.log("final", final)
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>

      <div className="main"> 
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;