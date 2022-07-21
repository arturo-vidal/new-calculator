import React from 'react';

function Clear(props){
  return(
    <div id="clear" onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

export default Clear;