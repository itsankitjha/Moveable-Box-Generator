import React from "react";
import "./Box.css";

const Box = ({ id, topValue, leftValue, zIndex, boxClickHandler }) => {
  const boxStyle = {
    top: topValue,
    left: leftValue,
  };
  const listItemStyle = {
    zIndex: zIndex,
  };
  return (
    <li style={listItemStyle} id={id}>
      <div style={boxStyle} onClick={(event) => boxClickHandler(event)}>
        <p>Box {id.toString().split("item")[1]}</p>
      </div>
    </li>
  );
};

export default Box;
