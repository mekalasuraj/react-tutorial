import React, { Component } from 'react'

export class DataStructures extends Component {
	constructor(props) {
		super(props);
	}

    componentDidMount(){
        this.fizzBuzz();
    }

    fizzBuzz(){
        // for (var i=1; i <= 15; i++){
        //     if (i % 15 == 0) console.log("FizzBuzz");
        //     else if (i % 3 == 0) console.log("Fizz");
        //     else if (i % 5 == 0) console.log("Buzz");
        //     else console.log(i);
        // }
        for(let i=1;i<=15;i++){
            if(i % 5 ===0 && i%3 ===0){
                console.log('FizzBuzz');
            } else if(i % 5 ===0){
                console.log("Buzz");
            } else if(i % 3 ===0){
                console.log("Fizz");
            } else{
                console.log(i);
            }
        }
    }
   
    capitalFirstLetter(){
        
    }
	render() {
		
			return(
                <>
                <h1>Data Structures</h1>
                </>
            ) 
		
	}
}

export default DataStructures