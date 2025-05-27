import { useState } from "react";


function App() {

  const [newItem, setnewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setnewItem(event.target.value)
    
  }

  function addItem(params) {
    setItems(prevValue =>[
      ...prevValue,newItem
    ]);
    setnewItem("");
    
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
        <li key={index}>{item}</li>
       ))} 
      
      </ul>
    </div>
      

  </div>
  )

}

export default App;