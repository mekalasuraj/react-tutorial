import React from 'react';
import ComponentD from './componentD';
class ComponentC extends React.Component{
    render(){
        return(
            <div>ComponentC line
                <ComponentD/>
            </div>
        );
    }
}

export default ComponentC;