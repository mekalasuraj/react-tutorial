import React, { Component } from 'react';
import Hover from './hover';
import Counter from './counter';
class HOCDemo extends Component {
  
  render() {
    
    return (
      <>
       <Hover/>
       <Counter name='suraj'/>
      </>
    );
  }
}

export default HOCDemo;
