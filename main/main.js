import ReactDOM from 'react-dom';
import React from 'react';
const axios = require('axios');

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {arzesh: 'loading'};
	}
	componentDidMount() {
		axios.get('/parTree').then(response => {
			this.setState({arzesh: Math.round(response.data.arzesh / 1e10 * 100) / 100 + 'B'}, () => console.log('arzesh = ', response.data.arzesh));
		});
	}

	render() {
		return (
			<div dir="RTL">
				<span
					style={{
						color: 'blue',
						fontFamily: 'Courier New, Courier, monospace',
						fontWeight: 'bold',
						fontSize: '16px',
					}}>
					ارزش معاملات : {this.state.arzesh}
				</span>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
