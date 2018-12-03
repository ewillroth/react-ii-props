import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			money: 0
		};
		this.giveMoney = this.giveMoney.bind(this);
		this.spendMoney = this.spendMoney.bind(this);
	}

	giveMoney() {
		this.setState({
			money: this.state.money + 5
		});
	}

	spendMoney() {
		this.setState({
			money: this.state.money - 5
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>One-Way Data Binding</h1>
				</header>

				<Student
					name="Braden"
					money={this.state.money}
					giveMoney={this.giveMoney}
					spendMoney={this.spendMoney}
				/>
			</div>
		);
	}
}

export default App;
