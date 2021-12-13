import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AddOrderCard from '../../component/addOrderCard/AddOrderCard';
import OrderListDetails from '../../component/orderListDetails/OrderListDetails';
import { get_food_service } from '../../store/foodServicesActionType';

const OrderCard = ({ visible }) => {
	const [addItemQuantity, setAddItemQuantity] = useState([[]]);
	const [addtionalItemList, setAddtionalItemList] = useState([]);
	const [visibleItem, setVisibleItem] = useState(false);
	const [additional, setAdditional] = useState();
	const [branchOrderFoodAdditionals, setBranchOrderFoodAdditionals] = useState(
		[]
	);

	const [makeOrderFoods, setMakeOrderFoods] = useState({
		foodId: null,
		quantity: null,
		regularPrice: null,
		k: null,
		tableToServe: 1,
		title: null,
		foodBranchOrderFoodAdditionals: null,
	});
	const [makeAdditional, setMakeAdditional] = useState({
		foodAdditionalId: null,
		title: null,
	});
	const [makeAdditionalItemList, setMakeAdditionalItemList] = useState({
		foodAdditionalItemId: null,
		price: null,
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
	const addItem = (e) => {
		const items = [...addItemQuantity];
		items.push([null]);
		setAddItemQuantity(items);
	};

	const remove = (e) => {
		if (addItemQuantity.length > 1) {
			const removeList = addItemQuantity?.filter(
				(data, index) => index + 1 !== e
			);
			setAddItemQuantity(removeList);
		}
	};

	const onChange = (e) => {
		const additionals = foodServiceListData.foodService.foodService.find(
			(data) => data.id == e
		);

		setAdditional(additionals?.vendorFoodAdditionals);
		setVisibleItem(true);
		let addAdditional = [];
		for (let i = 0; i < additionals?.vendorFoodAdditionals?.length; i++) {
			const findAdditionalFood = additionals?.vendorFoodAdditionals[i];

			const foodAdditionals = { ...makeAdditional };
			foodAdditionals.foodAdditionalId = findAdditionalFood.id;
			foodAdditionals.title = findAdditionalFood.title;
			// console.log(	setAdditionalList(addAdditional););
			addAdditional.push(foodAdditionals);
			// addAdditional.push(additionals);
		}
		setAdditionalList(addAdditional);
	};

	const onSelect = (e) => {
		let addItemList = [...addtionalItemList];
		for (let i = 0; i < additional.length; i++) {
			// console.log(additional[i].vendorFoodAdditionalItems);
			let itemList = additional[i].vendorFoodAdditionalItems.find(
				(data) => data.id == e
			);

			// let makeItem = { ...makeAdditionalItemList };
			// makeItem.foodAdditionalItemId = itemListz.id;
			// makeItem.price = itemListz.price;
			// makeItem.title = itemListz.title;
			// console.log(makeItem);
			if (itemList != undefined) {
				let makeItem = { ...makeAdditionalItemList };
				makeItem.foodAdditionalItemId = itemList?.id;
				makeItem.price = itemList?.price;
				makeItem.title = itemList?.title;
				console.log(makeItem);
			}
		}
	};
	const onCreate = (values) => {
		console.log('Received values of form: ', values);
		//* ************  find the food list ****************
		const foodList = foodServiceListData.foodService.foodService.find(
			(data) => data.id == values.foodItemId
		);
		const orderFoods = { ...makeOrderFoods };
		orderFoods.foodId = foodList.id;
		orderFoods.title = foodList.title;
		orderFoods.regularPrice = foodList.regularPrice;
		orderFoods.quantity = addItemQuantity.length;
		orderFoods.foodBranchOrderFoodAdditionals = additionalList;
		let orderFoodList = [...branchOrderFoodAdditionals];
		orderFoodList.push(orderFoods);
		setBranchOrderFoodAdditionals(orderFoodList);

		setAddItemQuantity([[]]);
		setAdditional(null);
		setVisibleItem(false);
	};

	return (
		<>
			<Row justify="space-around" style={{ marginTop: '20px' }}>
				<Col sm={24} lg={24} xl={11} xxl={10}>
					<AddOrderCard
						onCreate={onCreate}
						additional={additional}
						addItem={addItem}
						addItemQuantity={addItemQuantity}
						remove={remove}
						onChange={onChange}
						onSelect={onSelect}
						visibleItem={visibleItem}
						foodServiceListData={foodServiceListData}
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
