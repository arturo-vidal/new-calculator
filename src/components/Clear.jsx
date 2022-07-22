import React from 'react';
import '../styles/Clear.css';

function Clear(props){
  return(
    <div id="clear" onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

export default Clear;