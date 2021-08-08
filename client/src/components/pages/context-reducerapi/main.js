import React,{useReducer} from 'react';
import ComponentC from './componentC';

export const counterContext=React.createContext();

const initialState={
    counter:0
}

const reducer =(state,action)=>{
    switch(action.type){
        case "Increment":
        return {...state,counter:state.counter+1};
        case "Decrement":
        return {...state,counter:state.counter-1};
        default:
        return state;
    }
}

const MainComponentContext =()=>{
    
    const [count,dispatch] = useReducer(reducer,initialState);

    const incrementCounter=()=>{
        dispatch({type:"Increment"});
    }

    const decrementCounter=()=>{
        dispatch({type:"Decrement"});
    }
    
    return(
        <div>
            MainComponent line (provided value component)   
            <counterContext.Provider value={{counterCount:count.counter,dispatchCounter:dispatch}}>
                <ComponentC/>
            </counterContext.Provider>
        
            <p>Count :{count.counter}</p>
            <p>Main Component Buttons</p>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            </div>
    );
}
export default MainComponentContext;