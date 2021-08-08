import React, { Component } from 'react';

class Task extends Component {
    render() {
       console.log("task added");
       return (<div>
          {this.props.name}
       </div>);
    }
 }

 export default Task;