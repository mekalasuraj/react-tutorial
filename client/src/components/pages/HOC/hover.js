import React, { Component } from 'react';
import HocLogic from './hocLogic';
class OnHover extends Component {
  
  render() {
    
    return (
      <>
       
        <div className="col-12">
        <h1 onMouseOver={this.props.onBtnClick}>hover me {this.props.count}</h1>
        </div>
      </>
    );
  }
}

export default HocLogic(OnHover);
