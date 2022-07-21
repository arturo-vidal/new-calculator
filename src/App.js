import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import Clear from './components/Clear';

function App() {

  const [input, setInput]= useState("0");

  const agregarInput=(valor)=>{
    if(input==="0"){
      setInput(valor);
    }else{
      setInput(input + valor);
    }
  }

  const agregarOperador=(valor)=>{
    const lastElem= input[input.length-1];
    if((lastElem===" ") && (valor!=="-")){
      setInput(input.replace(input[input.length-2], valor))
    }else{
      setInput(input + " " + valor + " ");
    }
  }

  const agregarDecimal=(valor)=>{
    const arr= input.split(" ");
    const lastElem= arr[arr.length-1];
    if(!lastElem.includes(".")){
      setInput(input + ".");
    }
  }

  const agregarCero=(valor)=>{
    const arr= input.split(" ");
    const lastElem= arr[arr.length-1];
    if(lastElem[lastElem.length-1]!=="0"){
      setInput(input + "0");
    }
  }

  const clearAllInput=()=>{
    setInput("0");
  }

  const calcularResultado=()=>{
    if(input!=="0"){
      setInput(eval(input));
    }else{
      setInput("error");
    }
  }

  return (
    <div id="app-container">
      <div id="calculator-container">
        <Display input={input} />
        <div className="row">
          <Button id="one" onClick={agregarInput}>1</Button>
          <Button id="two" onClick={agregarInput}>2</Button>
          <Button id="three" onClick={agregarInput}>3</Button>
          <Button id="add" onClick={agregarOperador}>+</Button>
        </div>
        <div className="row">
        <Button id="four" onClick={agregarInput}>4</Button>
          <Button id="five" onClick={agregarInput}>5</Button>
          <Button id="six" onClick={agregarInput}>6</Button>
          <Button id="subtract" onClick={agregarOperador}>-</Button>
        </div>
        <div className="row">
        <Button id="seven" onClick={agregarInput}>7</Button>
          <Button id="eight" onClick={agregarInput}>8</Button>
          <Button id="nine" onClick={agregarInput}>9</Button>
          <Button id="multiply" onClick={agregarOperador}>*</Button>
        </div>
        <div className="row">
        <Button id="decimal" onClick={agregarDecimal}>.</Button>
          <Button id="zero" onClick={agregarCero}>0</Button>
          <Button id="divide" onClick={agregarOperador}>/</Button>
          <Button id="equals" onClick={calcularResultado}>=</Button>
        </div>
        <Clear handleClear={clearAllInput}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;
