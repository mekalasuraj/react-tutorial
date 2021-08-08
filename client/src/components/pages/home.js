import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      isClicked:false,
      urlValue:"",
      list:[
        {id:1,name:'gaurav'},
        {id:6,name:'vishnu'}
      ],
      name1:'alpha',
      name2:'beta',
      name3:'gamma',
      textVal:''
    }
  }

  onBtnClick=(e)=>{
    e.preventDefault();
    console.log(e.target.getAttribute('data-url'));
    let url=e.target.getAttribute('data-url');
    this.setState({isClicked:true,urlValue:url});
  }

  oninputChg=(e)=>{
    this.setState({textVal:e.target.value});
  }

  render() {
    const check = 0;
    let {name1,name2}=this.state
    return (
      <>
        <h1>Home page</h1>
        <div className="col-12">
        <div className="row">
        <div className="col-6">
        <button onClick={this.onBtnClick} data-url="https://www.youtube.com/embed/zHAsspNCmhQ">music</button>
        <button onClick={this.onBtnClick} data-url="https://www.youtube.com/embed/RF5nG3rktbs">news</button>
        <button onClick={this.onBtnClick} data-url="https://www.youtube.com/embed/dwV04XuiWq4">sports</button>
        { check == 0 && <h1>Hello</h1> }
        </div>
        <div className="col-6">
        {
          this.state.isClicked &&
          (
            
            <iframe width="420" height="345" src={`${this.state.urlValue}?autoplay=1`} allow="autoplay"></iframe>
          )
        }
        
        

        </div>
        
        </div>
        {
          this.state.list.map((item,i)=>(
            <p key={i}>{item.name}</p>
          ))
        }
        <p>{name1}</p>
        <p>{name2}</p>
        <input onChange={this.oninputChg} value={this.state.textVal}/>
        </div>
      </>
    );
  }
}

export default HomePage;
