import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

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
        <button
        className="deleteBtn">
         <RiDeleteBin2Line />
        </button>
      </li>
    )
}

export default ToDoItem;