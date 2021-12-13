import React from 'react';
import { Card } from 'antd';
import './OrderListDetails.css';
import { useState } from 'react';
const OrderListDetails = ({ branchOrderFoodAdditionals, additionalList }) => {
	console.log(branchOrderFoodAdditionals);
	return (
		<div className="site-card-border-less-wrapper">
			{branchOrderFoodAdditionals.map((data, index) => (
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
