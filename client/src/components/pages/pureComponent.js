import React, { PureComponent } from 'react';
import Task from './task';
class PureComp extends PureComponent {
  constructor(props) {
    super(props);
      this.state = {
         name:'suraj'
      };
  }

  componentDidMount() {
    setInterval(() => {
       this.setState((oldState) => {
          
          return { name: oldState.name }
       });
    this.setState({name:'suraj'});
    
    }, 1000);
 }
 render() {
    console.log("taskList render called");
    return (<div>
       <Task name={this.state.name}/>
    </div>);
 }
}

export default PureComp;
