import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState(() =>{
  const savedItems = localStorage.getItem("tasks");
  return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  function addItem(newItem) {
    if (newItem.text.trim() !== ""){
        setItems(prevValue =>[
      ...prevValue, {...newItem, completed: false}]);
    }
  }

  function deleteItem(indexToDelete) {
    setItems(prevValue => prevValue.filter((_, index) => index !== indexToDelete))
  }

  function editItem(indexToEdit, updatedItem) {
    setItems(prevValue => 
      prevValue.map((item, index)=>
        index === indexToEdit ? updatedItem : item
      )
    );
  }

  function toggleCompleted(indexToToggle) {
    setItems(prevValue => 
      prevValue.map((item, index)=>
        index === indexToToggle ? {...item, completed: !item.completed } : item
      )
    );
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
       text={item.text}
       deadline={item.deadline}
       completed={item.completed}
       onDelete={() => deleteItem(index)}
       onEdit={(updatedItem) => editItem(index,updatedItem )}
       onToggleCompleted={() => toggleCompleted(index)}
        />
       ))} 
      
      </ul>
    </div>
      

  </div>
  )

}

export default App;