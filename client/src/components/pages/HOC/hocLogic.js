import React,{Component} from 'react';

 const enhancedComponent =(OldComponent)=>{
    class HocLogic extends React.Component{
        constructor(){
            super();
            this.state={
                count:0
            }
        }
          onBtnClick=(e)=>{
    e.preventDefault();
    this.setState((prevState)=>{
        return {count:prevState.count+1}
    })
  }
        render(){
            return(
                <OldComponent count={this.state.count} onBtnClick={this.onBtnClick} {...this.props}/>
            );
        }
    }
    return HocLogic;
 }

 export default enhancedComponent;