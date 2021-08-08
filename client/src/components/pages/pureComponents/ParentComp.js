import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
//import MemoComp from './MemoComp'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Vishwas',
			count:0
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Vishwas'
			})
			// this.setState((prevState)=>{
				
			// 	return{count:prevState.count+1}
			// })
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />
				{/* <MemoComp name={this.state.name} /> */}
			</div>
		)
	}
}

export default ParentComp