import React,{useContext} from 'react';
import ComponentE from './componentE';
import {counterContext} from './main'
 
const ComponentD=()=>{
    const countContext=useContext(counterContext);

    const incrementCounterD=()=>{
        countContext.dispatchCounter({type:"Increment"});
    }

    const decrementCounterD=()=>{
        countContext.dispatchCounter({type:"Decrement"});
    }

        return(
            <div>ComponentD Buttons
                <p>d component count:{countContext.counterCount}</p>
                <button onClick={incrementCounterD}>+</button>
            <button onClick={decrementCounterD}>-</button> 
                <ComponentE/>

            </div>
        );
    
}

export default ComponentD;