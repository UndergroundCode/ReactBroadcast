import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ReactBroadcast from './Broadcast'

class Test1 extends Component{

	constructor(props){
		super(props);
		this.state = {
			selected: this.props.selected
		}

		ReactBroadcast.onContains('button', (val, name) => {
			this.setState({selected: 'button' + this.props.id === name});
		})
	}

	click(){
		ReactBroadcast.broadcast('button' + this.props.id, true);
	}

	render(){
		return (
			<button onClick={this.click.bind(this)}>Click Me! ({this.state.selected ? 'Selected' : ''})</button>
		);
	}
}

ReactDOM.render(
  <div>
		<Test1 selected={true} id={1} />
		<Test1 selected={false} id={2} />
  </div>,
  document.getElementById('root')
);
