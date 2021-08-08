import React from 'react';
import {ConsumeContext} from './userContext';
// class ComponentE extends React.Component{
//     render(){
//         return(
//             <div>ComponentE line(consume context)
//                 <ConsumeContext>
//                     {
//                         (userName)=>{
//                             return (<p >Hi {userName.join(',')}</p>)
//                         }
//                     }
//                 </ConsumeContext>
//             </div>
//         );
//     }
// }
const ComponentE =()=>{
    return(
        <div>ComponentE line(consume context)
                <ConsumeContext>
                     {
                         (userName)=>{
                             return (<p >Hi {userName.name}</p>)
                         }
                     }
                 </ConsumeContext>
             </div>
    )
}
export default ComponentE;