import { useState } from "react";

function InputArea (props){
    const [newItem, setNewItem] = useState("");
    const [deadLine, setdeadLine] = useState("");

    
  function handleChange(event) {
    setNewItem(event.target.value)
    
  }

  function handleAdd() {
    props.onAdd({
      text: newItem,
      deadline: deadLine
    });
    setNewItem("");
    setdeadLine("");
    }
  
  function handleDateChange(e) {
    setdeadLine(e.target.value)
  }


    return (
    <div className="form">
      <div className="">
        <input
          className="inputItem" 
          onChange={handleChange}
          type="text"
          value={newItem}
          placeholder="Add a task">
          </input>
          <input 
          className="inputDeadline"
          onChange={handleDateChange}
          type="date"
          value={deadLine}>
        </input>
      </div>
     
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
    ) 


}
export default InputArea;