import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AddOrderCard from '../../component/addOrderCard/AddOrderCard';
import OrderListDetails from '../../component/orderListDetails/OrderListDetails';
import { get_food_service } from '../../store/foodServicesActionType';

const OrderCard = ({ visible }) => {
	const addItem = (e) => {
		console.log(e);
	};
	const [branchOrderFoodAdditionals, setBranchOrderFoodAdditionals] = useState(
		[]
	);

	const [makeOrderFoods, setMakeOrderFoods] = useState({
		foodId: null,
		quantity: null,
		regularPrice: null,
		tableToServe: 1,
		title: null,
		foodBranchOrderFoodAdditionals: null,
	});
	const [makeAdditional, setMakeAdditional] = useState({
		foodAdditionalId: null,
		title: null,
	});
	const [additionalList, setAdditionalList] = useState([]);
	// ************ get food service data from store  ***************
	const foodServiceListData = useSelector((state) => state);
	const dispatch = useDispatch();
	const foodServiceList = async () => {
		dispatch(await get_food_service());
	};

	useEffect(() => {
		foodServiceList();
	}, []);

	// ************ end ***************

	const onCreate = (values, addItemQuantity, additional) => {
		console.log(
			'Received values of form: ',
			values,
			additional,
			addItemQuantity
		);
		//* ************  find the food list ****************

		const foodList = foodServiceListData.foodService.foodService.find(
			(data) => data.id == values.foodItemId
		);
		const orderFoods = { ...makeOrderFoods };
		orderFoods.foodId = foodList.id;
		orderFoods.title = foodList.title;
		orderFoods.regularPrice = foodList.regularPrice;
		orderFoods.quantity = addItemQuantity.length;

		let orderFoodList = [...branchOrderFoodAdditionals];
		orderFoodList.push(orderFoods);
		setBranchOrderFoodAdditionals(orderFoodList);
		let addAdditional = [...additionalList];
		// *************addAdditional list *****************
		// for (let i = 0; i < addItemQuantity.length; i++) {
		// 	const findAdditionalFood = addItemQuantity[i];
		// 	for (let j = 0; j < findAdditionalFood.length; j++) {
		// 		// console.log(findAdditionalFood[i].id);
		// 		const list = findAdditionalFood[j];

		// 		const additional = { ...makeAdditional };
		// 		additional.foodAdditionalId = list.id;
		// 		additional.title = list.title;

		// 		addAdditional.push(additional);
		// 	}
		// }
		for (let i = 0; i < additional.length; i++) {
			const findAdditionalFood = additional[i];
			const additionals = { ...makeAdditional };
			additionals.foodAdditionalId = findAdditionalFood.id;
			additionals.title = findAdditionalFood.title;

			addAdditional.push(additional);
		}
		setAdditionalList(addAdditional);
	};

	return (
		<>
			<Row justify="space-around" style={{ marginTop: '20px' }}>
				<Col sm={24} lg={24} xl={11} xxl={10}>
					<AddOrderCard
						onCreate={onCreate}
						foodServiceListData={foodServiceListData}
						addItem={addItem}
					/>
				</Col>
				<Col sm={24} lg={24} xl={11} xxl={11}>
					<OrderListDetails
						branchOrderFoodAdditionals={branchOrderFoodAdditionals}
						additionalList={additionalList}
					/>
				</Col>
			</Row>
		</>
	);
};

export default OrderCard;
