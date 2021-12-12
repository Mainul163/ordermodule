import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

import OrderModal from '../modal/OrderModal';

const AddOrderCard = ({ onCreate, foodServiceListData, addItem }) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Button
				type="primary"
				onClick={() => {
					setVisible(true);
				}}
			>
				ADD NEW ORDER
			</Button>
			{/* ********** Modal Component start ****************/}
			<OrderModal
				visible={visible}
				addItem={addItem}
				onCreate={onCreate}
				foodServiceListData={foodServiceListData}
				onCancel={() => {
					setVisible(false);
				}}
			/>
			{/* ********** Modal Component start end ****************/}
		</>
	);
};

export default AddOrderCard;
