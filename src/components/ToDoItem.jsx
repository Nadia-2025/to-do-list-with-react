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
        <div className="editArea">
          <input
          className="sharedStyle editInput"
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <input
          className="sharedStyle editDate"
          type="date"
          value={editDate}
          onChange={e => setEditDate(e.target.value)}
          />  
          <button
            className="sharedStyle editButton" 
            onClick={handleSave}>Save</button>
          <button
            className="sharedStyle editButton"  onClick={handleCancel}>Cancel</button>
        </div>
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