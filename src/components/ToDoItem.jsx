import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

function ToDoItem(props) {
  const [IsDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText ] = useState();
  const [editDate, setEditDate ] = useState();

  function handleOnClick() {
      setIsDone(prev => !prev);
  }

  function handleDoubleClick() {
    setIsEditing (true);
  }

  function handleDeleteClick() {
    props.onDelete();
  }

  function handleSave() {
    props.onEdit({
      text:editText,
      deadline:editDate
    });
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditText(props.text);
    setEditDate(props.deadline);
    }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <input
          type="date"
          value={editDate}
          onChange={e => setEditDate(e.target.value)}
          />  
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
        ) : (
        <>
          <span
          className="itemText" 
          onClick={handleOnClick}
          onDoubleClick={handleDoubleClick}
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
          className="deleteBtn"
          onClick={handleDeleteClick}>
          <RiDeleteBin2Line />
          </button>
        </>
      )}
    </li>
  )
}

export default ToDoItem;