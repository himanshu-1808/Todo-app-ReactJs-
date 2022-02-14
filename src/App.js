
import './App.css';
import React, { useState } from "react"
import ToDoList from './ToDoList';
function App() {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);
  const itemEvent=(event)=> {
    setInputList(event.target.value);
  };

  const listofItems= ()=> {
    setItems((oldItems)=> {
      return [...oldItems, inputList];
      
    });
    setInputList("");
  };
 
 
const deleteItems=(id)=>{
setItems((oldItems)=>{
  return oldItems.filter((arrElem,index)=>{
return index!== id 
  })
})
}


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" onChange={itemEvent} value={inputList} placeholder="Add items" />

          <button onClick={listofItems}>+</button>
          <ol>
        {Items.map((itemVal,index)=> {
          return <ToDoList key={index} id={index} text={itemVal}
          onSelect={deleteItems}
          />;
        })}
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
