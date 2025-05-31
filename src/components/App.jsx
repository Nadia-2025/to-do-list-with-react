import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { v4 as uuidv4 } from "uuid";

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
      const itemWithId = {
        ...newItem,
        id: uuidv4(),
        completed: false
      };
      setItems(prevValue =>[
      ...prevValue, itemWithId]);
    }
  }

  function deleteItem(idToDelete) {
    setItems(prevValue => prevValue.filter(item=> item.id !== idToDelete))
  }

  function editItem(idToEdit, updatedItem) {
    setItems(prevValue => 
      prevValue.map(item=>
        item.id === idToEdit ? { ...item, ...updatedItem } : item
      )
    );
  }

  function toggleCompleted(idToToggle) {
    setItems(prevValue => 
      prevValue.map(item=>
        item.id === idToToggle ? {...item, completed: !item.completed } : item
      )
    );
  }
  function getItemState(item) {
    const today = new Date();
    const deadline = new Date(item.deadline);
    deadline.setHours(23, 59, 59, 999);

    const diffHours = (deadline - today) / (1000*60*60);

    if (item.completed) {
    return  "completed";
    } else if (deadline < today) {
      return "overdue";
    } else if(diffHours <=24){
      return  "almost-due";
    } else {
      return "pending";
    }
  }

  const sortedItems = [...items].sort((a,b) => {
    const stateOrder = {
      "overdue": 0,
      "almost-due": 1,
      "pending":2,
      "completed":3
    };

    const stateA = getItemState(a);
    const stateB = getItemState(b);

    if (stateOrder[stateA] !== stateOrder[stateB]) {
      return stateOrder[stateA] - stateOrder[stateB]
    }
    return new Date (a.deadline) -  new Date (b.deadline);

  });


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
       {sortedItems.map((item,index) =>{
        console.log("Rendering item:", item);
        return (
       <ToDoItem
       key={item.id}
       id={item.id}
       text={item.text}
       deadline={item.deadline}
       completed={item.completed}
       state={getItemState(item)}
       onDelete={() => deleteItem(item.id)}
       onEdit={(updatedItem) => editItem(item.id,updatedItem )}
       onToggleCompleted={() => toggleCompleted(item.id)}
        />
       );
      })} 
      
      </ul>
    </div>
      

  </div>
  )

}

export default App;