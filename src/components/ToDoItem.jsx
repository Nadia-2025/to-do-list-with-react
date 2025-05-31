import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText ] = useState("");
  const [editDate, setEditDate ] = useState("");

  const state =props.state;

  function handleDoubleClick() {
    setEditText(props.text);
    setEditDate(props.deadline);
    setIsEditing (true);
  }

  function handleDeleteClick() {
    props.onDelete();
  }

  function handleSave() {
    props.onEdit({
      id:props.id,
      text:editText,
      deadline:editDate,
      completed: props.completed
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
          <input 
            type="checkbox"
            checked={props.completed}
            onChange={props.onToggleCompleted}
          />
          <span 
          className={`state ${state}`}
          style={{
            textDecoration: props.completed ? "line-through" : "none",
            opacity: props.completed ? 0.6 : 1,
            cursor: "pointer"
            }}>
          </span>
          <span  
            className={`itemText ${state === "almost-due" ? "shaking" : ""}`}
            onDoubleClick={handleDoubleClick}
           style={{
            textDecoration: props.completed ? "line-through" : "none",
            opacity: props.completed ? 0.6 : 1,
            cursor: "pointer"}}
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