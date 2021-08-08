import React from 'react';


function Title(props) {
    console.log(`Rendering title - ${props.name}`);
   
    return (
      <div>{props.name} - {props.count}</div>
    )
  }

  export default React.memo(Title);

