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
      ...prevValue,newItem
    ]);
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
       onDelete={() => deleteItem(index)}
       onEdit={(updatedItem) => editItem(index,updatedItem )}
        />
       ))} 
      
      </ul>
    </div>
      

  </div>
  )

}

export default App;