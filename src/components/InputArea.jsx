import { useState } from "react";

function InputArea (props){
    const [newItem, setNewItem] = useState("");

    
  function handleChange(event) {
    setNewItem(event.target.value)
    
  }

  function handleAdd() {
    props.onAdd(newItem)
    setNewItem("");
  }
    return (
    <div className="form">
      <input onChange={handleChange}
      type="text"
      value={newItem}></input>
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
    ) 


}
export default InputArea;