import React from 'react';
import { Card } from 'antd';
import './OrderListDetails.css';
import { useState } from 'react';
const OrderListDetails = ({ branchOrderFoodAdditionals, additionalList }) => {
	const addbranchOrderFoodAdditionals = [];
	for (let i = 0; i < branchOrderFoodAdditionals.length; i++) {
		let findBranchOrderFoodAdditional = branchOrderFoodAdditionals[i];
		findBranchOrderFoodAdditional.foodBranchOrderFoodAdditionals =
			additionalList;
		addbranchOrderFoodAdditionals.push(findBranchOrderFoodAdditional);
	}

	return (
		<div className="site-card-border-less-wrapper">
			{addbranchOrderFoodAdditionals.map((data, index) => (
				<Card
					title={data.title}
					key={index}
					bordered={false}
					style={{ width: 300, marginBottom: '10px' }}
				>
					<p>Quantity: {data.quantity}</p>
					<br />
					<p>Regular Price: {data.regularPrice}</p>
					<p>Additional Item: {data.foodBranchOrderFoodAdditionals.length}</p>
				</Card>
			))}
		</div>
	);
};

export default OrderListDetails;
