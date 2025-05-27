import { useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setNewItem(event.target.value)
    
  }

  function addItem(params) {
    if (newItem.trim() !== ""){
        setItems(prevValue =>[
      ...prevValue,newItem
    ]);
    setNewItem("");
    }
  }

  return (
  <div className="container">
    <div className="heading">
      <h1>To-Do List</h1>
    </div>
    <div className="form">
      <input onChange={handleChange}
      type="text"
      value={newItem}></input>
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul className="">
       {items.map((item,index) =>(
       <ToDoItem
       key={index}
       text={item} />
       ))} 
      
      </ul>
    </div>
      

  </div>
  )

}

export default App;