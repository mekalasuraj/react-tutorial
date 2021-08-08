import React,{useContext} from 'react';
import {counterContext} from './main'
 

const ComponentE =()=>{
    const countContext=useContext(counterContext);
    
    const incrementCounterE=()=>{
        countContext.dispatchCounter({type:"Increment"});
    }

    const decrementCounterE=()=>{
        countContext.dispatchCounter({type:"Decrement"});
    }

    return(
        <div>
            ComponentE Buttons
            <p>Main Component Buttons</p>
            <button onClick={incrementCounterE}>+</button>
            <button onClick={decrementCounterE}>-</button>   
        </div>
    )
}
export default ComponentE;