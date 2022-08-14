import React from "react";
import "./Box.css";
const Box = (props) => {
  var boxStyle = {
    top: props.topVal,
    left: props.leftVal,
  };

  var listItemStyle = {
    zIndex: props.zIndex,
  };

  return (
    <li style={listItemStyle} id={props.id}>
      <div
        style={boxStyle}
        className="box"
        onClick={(event) => props.boxClickHandler(event)}
      >
        <p>Box {props.id.toString().split("item")[1]}</p>
      </div>
    </li>
  );
};

export default Box;
