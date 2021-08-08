import React,{useReducer} from 'react';

const initialState={
    counter:0,
    list:[]
};

const reducer=(state,action)=>{
    switch(action.type){
    case "Increment":
        return {...state,counter:state.counter+action.value};
    case "Decrement":
    return {...state,counter:state.counter-action.value};
    default:
        return state;    
}
}

const CounterOne=()=>{
    const [count,dispatch] = useReducer(reducer,initialState);
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState);

const increseCounter=()=>{
 dispatch({type:"Increment",value:1});   
}

const decreseCounter=()=>{
    dispatch({type:"Decrement",value:1});   
}

const increseCounterTwo=()=>{
    dispatchTwo({type:"Increment",value:5});   
   }
   
   const decreseCounterTwo=()=>{
    dispatchTwo({type:"Decrement",value:5});   
   }
return(
    <>
    <p>count{count.counter}</p>
    <button onClick={increseCounter}>+</button>
    {
        count.counter > 0 ?
        (
            <button onClick={decreseCounter}>-</button>
        )
        :(
            <button onClick={decreseCounter} disabled>-</button>
        )
    }
    
    <p>countTWO {countTwo.counter}</p>
    <button onClick={increseCounterTwo}>+</button>
    {
        countTwo.counter > 0 ?
        (
            <button onClick={decreseCounterTwo}>-</button>
        )
        :(
            <button onClick={decreseCounterTwo} disabled>-</button>
        )
    }
    </>
);
}

export default CounterOne;