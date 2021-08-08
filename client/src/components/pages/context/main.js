import React from 'react';
import ComponentC from './componentC';
import {ProvideContext} from './userContext';

// class MainComponent extends React.Component{
//     render(){
//         let data=["dheeraj","neeraj","suraj","kkk"];
//         return(
//             <div>
//                 MainComponent line (provided value component)
//                 <ProvideContext value={data}>
//                 <ComponentC/>
//                 </ProvideContext>
//             </div>
//         );
//     }
// }

const MainComponent =()=>{
    let data=["dheeraj","neeraj","suraj","kkk","jjj"];
    let name={id:1,name:"suraj"}
    return(
        <div>
                 MainComponent line (provided value component)
                 <ProvideContext value={name}>
                 <ComponentC/>
                 </ProvideContext>
            </div>
    );
}
export default MainComponent;