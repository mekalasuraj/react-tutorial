import React, { Component } from 'react';
import axios from 'axios';
const data = require('./quotes.json');
class ContactPage extends Component {
  constructor() {
    super();
    this.inputRef=React.createRef();
    this.state={
      quote:{},
      quotesList:data.quotes,
      quoteNum:0,
      plot1:Math.floor(Math.random() * 200),
      plot2:Math.floor(Math.random() * 200),
      plot3:Math.floor(Math.random() * 200),
      counter:0
    }
  }

  componentDidMount(){
    // axios.get('./quotes')
    // .then(response=>{
    //   console.log(response);
    // })
    
    this.inputRef.current.focus();
    console.log(this.inputRef.value);
    let quoteNum=Math.floor(Math.random() * 100);
   // let value=this.state.quotesList[quoteNum];
   let value=data.quotes[quoteNum];
    this.setState({quote:this.state.quotesList[quoteNum]});
  }

  onNewQuoteClick=(e)=>{
    e.preventDefault();
    let quoteNum=Math.floor(Math.random() * 100);

    this.setState({quote:this.state.quotesList[quoteNum],plot1:Math.floor(Math.random() * 200),plot2:Math.floor(Math.random() * 200),plot3:Math.floor(Math.random() * 200)});
  }

  onBtnCLick=(e)=>{
    e.preventDefault();
    this.setState((prevState)=>{
      return{counter: prevState.counter+1 }
    })
  }

  render() {
    let {author,quote:asd}=this.state.quote;
    
    return (
        <div >
          <h1>Contact Page</h1>
    
          <div className="text-center" style={{color:"#fff",background:`rgb(${this.state.plot1},${this.state.plot2},${this.state.plot3}`}}>
          <h2>{asd}</h2>
          <h2>{author}</h2>
          </div>
          
          <button style={{background:`rgb(${this.state.plot1},${this.state.plot2},${this.state.plot3}`,color:"#fff"}} onClick={this.onNewQuoteClick}>new Quote</button>
        <div>
          <button onClick={this.onBtnCLick}>click</button>
          <p>{this.state.counter}</p>
        </div>
        <input type="text" ref={this.inputRef} onChange={this.onKeyChange}/>
        </div>
     
    );
  }
}

export default ContactPage;
