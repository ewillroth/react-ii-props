import React from 'react';
import AddItem from './AddItem';

const Student = props => {
	console.log(props);
	return (
		<div>
			<h2>Name: {props.name}</h2>
			<div>
				<h4>Money:{props.money}</h4>
				<button onClick={props.spendMoney}>Spend Money</button>
				<button onClick={props.giveMoney}>Give me money</button>
			</div>
			<AddItem />
		</div>
	);
};

export default Student;
