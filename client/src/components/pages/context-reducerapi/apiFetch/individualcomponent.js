import React from 'react';
import {dataContext} from './mainFetch';

const IndividualComponent =()=>{
    console.log('individual rerender');
    return(
        
        <div>
           
            <dataContext.Consumer>
            {(data)=>{
                 return (<div>
                     {
                         data.item === null ?
                         (
                            <p>NO Item Selected</p>
                         )
                         :(
                            
                            <div>
                             <p >{data.item[0].title} </p>
                          <p > {data.item[0].category} </p>
                          <p > {data.item[0].price}</p>
                             </div>
                         )
                     }
                      
                 </div>)
            }
                
            }
            </dataContext.Consumer>
        </div>
    );
}
export default IndividualComponent;