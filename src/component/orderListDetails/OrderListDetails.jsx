import React, { useState } from 'react';
import { Card } from 'antd';
import './OrderListDetails.css';

const OrderListDetails = ({
	branchOrderFoodAdditionals,
	divideFoodAdditionalItemList,
}) => {
	const [makeAdditionalItemList, setMakeAdditionalList] = useState({
		foodBranchOrderFoodAdditionalItems: null,
	});

	if (divideFoodAdditionalItemList != undefined) {
		console.log(divideFoodAdditionalItemList);
		for (let i = 0; i < divideFoodAdditionalItemList.length; i++) {
			let additionalItemList = divideFoodAdditionalItemList[i];
		}
		const findBranchOrderFoodAdditionals = branchOrderFoodAdditionals.find(
			(data) => data
		);

		for (
			let i = 0;
			i < findBranchOrderFoodAdditionals.foodBranchOrderFoodAdditionals.length;
			i++
		) {
			const item =
				findBranchOrderFoodAdditionals.foodBranchOrderFoodAdditionals[i];
		}
	}
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
					{
						data.foodBranchOrderFoodAdditionals.map(e=>e.foodBranchOrderFoodAdditionalItems.map(a=><p>
							{a.title}
						</p>))
					}
				</Card>
			))}
		</div>
	);
};

export default OrderListDetails;
