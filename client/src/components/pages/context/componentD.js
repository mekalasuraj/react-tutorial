import React from 'react';
import ComponentE from './componentE';

class ComponentD extends React.Component{
    render(){
        return(
            <div>ComponentD line
                <ComponentE/>
            </div>
        );
    }
}

export default ComponentD;