import React, { useState } from "react";
import "./layout.css";
import Box from "components/Box/Box";
const Layout = () => {
  const [boxCount, setBoxCount] = useState(0);
  const [boxArr, setBoxArr] = useState([]);
  const [keyBoardVal, setKeyboardVal] = useState(true);
  const [liItemId, setLiItemId] = useState("item0");
  const [topVal, setTopVal] = useState(boxCount + 100);
  const [leftVal, setLeftVal] = useState(boxCount + 100);

  const addBoxHandler = () => {
    setBoxCount(boxCount + 1);
    setTopVal(boxCount + 100);
    setLeftVal(boxCount + 100);
    let idVal = "item" + boxCount;
    setBoxArr([
      ...boxArr,
      <Box
        key={idVal}
        id={idVal}
        topVal={topVal}
        leftVal={leftVal}
        zIndex={boxCount + 10}
        boxClickHandler={boxClickHandler}
      />,
    ]);
  };

  const boxKeyCheckHandler = (event) => {
    switch (event.which) {
      case 46:
      case 8: //delete keycode
        if (keyBoardVal) {
          deleteBoxHandler();
        }
        break;
      case 38: //up arrow code
      case 87: //W code
        if (keyBoardVal) {
          boxArr.forEach((ele) => {
            if (ele.props.id === liItemId) {
              let topOffset =
                parseInt(
                  document
                    .querySelector(`#${liItemId} div`)
                    .style.top.split("px")[0]
                ) - 15;

              if (topOffset > -100) {
                document.querySelector(`#${liItemId} div`).style.top =
                  topOffset + "px";
              }
            }
          });
        }
        break;
      case 40: //down arrow code
      case 83: //S code
        if (keyBoardVal) {
          boxArr.forEach((ele) => {
            if (ele.props.id === liItemId) {
              let topOffset =
                parseInt(
                  document
                    .querySelector(`#${liItemId} div`)
                    .style.top.split("px")[0]
                ) + 15;
              if (topOffset < 300) {
                document.querySelector(`#${liItemId} div`).style.top =
                  topOffset + "px";
              }
            }
          });
        }
        break;
      case 37: //left arrow code
      case 65: //A code
        if (keyBoardVal) {
          boxArr.forEach((ele) => {
            if (ele.props.id === liItemId) {
              let leftOffset =
                parseInt(
                  document
                    .querySelector(`#${liItemId} div`)
                    .style.left.split("px")[0]
                ) - 15;
              if (leftOffset > -515) {
                document.querySelector(`#${liItemId} div`).style.left =
                  leftOffset + "px";
              }
            }
          });
        }
        break;
      case 39: //right arrow code
      case 68: //D code
        if (keyBoardVal) {
          boxArr.forEach((ele) => {
            if (ele.props.id === liItemId) {
              let leftOffset =
                parseInt(
                  document
                    .querySelector(`#${liItemId} div`)
                    .style.left.split("px")[0]
                ) + 15;
              if (leftOffset < 730) {
                document.querySelector(`#${liItemId} div`).style.left =
                  leftOffset + "px";
              }
            }
          });
        }
        break;
      default:
        break;
    }
  };

  const keyboardHandler = () => {
    //keyboardToggle Handler
    keyBoardVal
      ? setKeyboardVal((keyval) => !keyval)
      : setKeyboardVal((keyval) => !keyval);
  };

  const deleteBoxHandler = () => {
    setBoxCount(boxCount - 1);
    setBoxArr(boxArr.filter((ele) => ele.props.id !== liItemId)); //liItemId set in box click handler
  };

  const boxClickHandler = (event) => {
    event.preventDefault();
    let eleId = event.target.parentNode.id.toString();
    setLiItemId(eleId);
    if (eleId) {
      document.querySelectorAll(`ul li div`).forEach((node) => {
        node.style.borderColor = "black";
      });
      document.querySelector(`ul #${eleId} div`).style.borderColor = "yellow";
    }
  };

  return (
    <div
      className="parentDiv"
      onKeyDown={(event) => boxKeyCheckHandler(event)}
      tabIndex="0"
    >
      <button className="addBtn" onClick={addBoxHandler}>
        Add box
      </button>
      <button className="toggleBtn" onClick={keyboardHandler}>
        Toggle Keyboard
      </button>
      <p>{keyBoardVal ? "Keyboard Enabled" : "Keyboard Disabled"}</p>
      <div id="divUl">
        <ul id="ulListId">{boxArr}</ul>
      </div>
    </div>
  );
};

export default Layout;
