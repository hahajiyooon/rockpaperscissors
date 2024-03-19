import React from "react";

const Box = (props) => {

  //승패에 따른 테두리 색 (이부분 못함)
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {//computer카드 && 비긴거 아님 && result!=="" > 가져온 결과가 win이면 result에 lose를, win이 아니면 win을
    result = props.result === "win" ? "lose" : "win";
  } else {// 비긴거면 tie를
    result = props.result;
  }


  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;