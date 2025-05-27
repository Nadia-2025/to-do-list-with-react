import { useState } from "react";

function ToDoItem(props) {
const [IsDone, setIsDone] = useState(false);

function handleOnClick() {
    setIsDone(prev => !prev);
}

    return (
        <li onClick={handleOnClick}
        style={{textDecoration: IsDone ? "line-through" : "none",
            cursor:"pointer"
        }}>{props.text}</li>
    )
}

export default ToDoItem;