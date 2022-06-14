// useState is a hook which is used to manage state react
// it is a type of hooks. 
// type:- useState, useEffect, onChange

//onChange used in input tag to fetch value of input box value and id

import React from "react";
import "./style.css";
import react, {useState} from "react"
export default function App() {

  // ----------------------useState--------------
  let [test, setTest] = useState(0)
  function increment(){
    setTest(test+1)
  }
  function decrement(){
    setTest(test-1)
  }
  function reset(){
    setTest(0)
  }

  //----------------------onChange--------------------
  let [val, setVal] = useState("")
  function changeVal(e){
    // let receiveVal = e.target.value
    // console.log(receiveVal)
    // setVal(receiveVal)
    let {value, id} = e.target
    setVal(value)
    console.log(value)
  }

  return (
    <div>
      {/* ----------------------useState-------------- */}
      <button  onClick={increment}>increment</button>
      <div>{test}</div>
      <button onClick={decrement}>decrement</button>
      <button   onClick={reset}>reset</button>


      {/* ---------onchange------------ */}
      <br/> <br/> <br/>
      <input type="text" id="test"onChange={changeVal}/> <br/>
      <div>{val}</div>
    </div>
  );
}
