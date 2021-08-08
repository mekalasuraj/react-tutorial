import React from 'react';
import {dataContext} from './mainFetch';
//import IndividualComponent from './individualcomponent';
const ShowListComponent =()=>{

// const useDataContext = useContext(dataContext)
console.log('list rerender');
// console.log('consume component');
// console.log(useDataContext);
    return(
        <>
                    <dataContext.Consumer>
            {(data)=>{
               
                 console.log(data);
                 return (data.list.map((item,i)=>(
                     <div key={item.id} style={{border:'1px solid #000'}}>
                      <p >{item.title} </p>
                      <p > {item.category} </p>
                      <p > {item.price}</p>
                      <button className="btn btn-primary" onClick={()=>data.dispatchItem({type:"Fetch_item",data:item.id})}>Save</button>
                     </div>
                   
                 )))
            }
             }
            </dataContext.Consumer>  
        </>
    );
}
export default React.memo(ShowListComponent);
// export default ShowListComponent;