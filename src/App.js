import React, {useState} from "react";
import {Data} from "./data.js"
import "./style.css";

export default function App() {
  const[list, setList] = useState(Data);
  const [selected, setSelected] = useState("");
  return (
    <div className="Main">
      <h1>Search Here You'll get a dropdown option</h1>
      <input list="List" placeholder="Search"  onChange={(e) => setSelected(e.target.value)}/>
      <datalist id="List">
        {list.map((ele) =>{
          return(
            <option>{ele.name}</option>
          )
        })}
      </datalist>
      <h3>{selected}</h3>
    </div>
  );
}
