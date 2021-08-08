import React,{useEffect,useReducer,createContext} from 'react';
import axios from 'axios';
import ShowListComponent from './showListComponent';
import IndividualComponent from './individualcomponent';

export const dataContext=createContext();

const initialState={
    listItems:[],
    item:null,
    isLoading:false
}

const reducer=(state,action)=>{
    switch(action.type){
        case "Fetch_Success":
            return {...state,listItems:action.data};
        case "Fetch_Failure":
            return{...state,listItems:[]};
            case "Fetch_item":
            return{...state,item:state.listItems.filter((obj)=>obj.id === action.data)};    
        default:
            return state;         
    }
}

const MainFetchComponent =()=>{

    const [items,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            dispatch({type:"Fetch_Success",data:response.data})
        })
    },[])

    return(
        <div>
            <dataContext.Provider value={{list:items.listItems,item:items.item,dispatchItem:dispatch}}>

            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-6">
                        <ShowListComponent/>
                    </div>
                    <div className="col-sm-6">
                        <div style={{position:'fixed',border:'1px solid #000'}}>
                            <IndividualComponent/>
                        </div>
                    </div>
                </div>
            </div>
            </dataContext.Provider>
        </div>
    );
}
export default MainFetchComponent;