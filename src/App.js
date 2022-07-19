import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

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
    if((lastElem===" ") && (valor!=="0")){
      setInput(input.replace(input[input.length-2], valor))
    }else{
      setInput(input + " " + valor + " ");
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
        <Button id="decimal" >.</Button>
          <Button id="zero" >0</Button>
          <Button id="divide" onClick={agregarOperador}>/</Button>
          <Button id="equals" >=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
