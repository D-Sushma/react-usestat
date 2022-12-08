// useState is a hook which is used to manage state react
// it is a type of hooks. 
// type:- useState, useEffect, onChange

//onChange used in input tag to fetch value of input box value and id

import React from "react";
import "./style.css";
import react, {useState} from "react"
export default function App() {

  // ==============onchange
  // let [val, setVal] = useState("")

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
  // function changeVal(e){
  //   // let receiveVal = e.target.value
  //   // console.log(receiveVal)
  //   // setVal(receiveVal)
  //   let {value, id} = e.target
  //   setVal(value)
  //   console.log(value)
  // }

  // =========================== OR ===========================
  function changeVal(e){
    setVal(e.target.value)
    console.log(val);
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
      <input type="text" id="test" value={val} onChange={changeVal}/> <br/>

      {/* ............................direct-apply without making function............................... */}
      {/* <input type="text" id="test" value={val} onChange={(e)=>setVal(e.target.value)}/> <br/> */}
      {/* <input type="text" id="test" value={val} onChange={(e)=>{setVal(e.target.value),console.log(val)}}/> <br/> */}
      {/* <input type="text" id="test" value={val} onChange={(e)=>{setVal(e.target.value),console.log({val})}}/> <br/> */}
      
      <div>{val}</div>
    </div>
  );
}
