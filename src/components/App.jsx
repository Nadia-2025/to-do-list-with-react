import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";


function App() {

  const [items, setItems] = useState([]);

  function addItem(newItem) {
    if (newItem.trim() !== ""){
        setItems(prevValue =>[
      ...prevValue,newItem
    ]);
    }
  }

  return (
  <div className="container">
    <div className="heading">
      <h1>To-Do List</h1>
    </div>
    <InputArea 
    onAdd={addItem}
    />
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