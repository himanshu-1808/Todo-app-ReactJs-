
import './App.css';
import React, { useState } from "react"
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
  };
 

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" onChange={itemEvent} placeholder="Add items" />

          <button onClick={listofItems}>+</button>
          <ol>
            {Items.map((itemVal)=> {
                return <li>{itemVal}</li>;
              })}
            
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
