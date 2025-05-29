import { useState } from "react";

function ToDoItem(props) {
const [IsDone, setIsDone] = useState(false);

function handleOnClick() {
    setIsDone(prev => !prev);
}

    return (
      <li> 
        <span
          className="itemText" 
          onClick={handleOnClick}
          style={{textDecoration: IsDone ? "line-through" : "none",
          cursor:"pointer"
          }}
        >{props.text}
        </span>
        <span
        className="deadlineText">
          (Due: {props.deadline})
        </span>
      </li>
    )
}

export default ToDoItem;