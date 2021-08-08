// import React,{useState,useEffect} from 'react';

// function Counter(){
//     const [count, setCount] = useState(0);

//    const onBtnClick=(e)=>{
//         e.preventDefault();
//         setCount(count + 1);
//     }
// return(
//     <>
//         <h1>Counter</h1>
//         <p>you cllicked {count}</p>
//         <button onClick={onBtnClick}>click</button>
//     </>
// );
// }

// export default Counter;
import React, { Component } from 'react';
import HocLogic from './hocLogic';
class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//      count:0
//     }
//   }

//   onBtnClick=(e)=>{
//     e.preventDefault();
//     this.setState((prevState)=>{
//         return {count:prevState.count+1}
//     })
//   }

  render() {
    
    return (
      <>
       
        <div className="col-12">
        <button onClick={this.props.onBtnClick}>click me {this.props.count}</button>
        <p>name:{this.props.name}</p>
        </div>
      </>
    );
  }
}

export default HocLogic(Counter);
