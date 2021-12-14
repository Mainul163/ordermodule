import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AddOrderCard from '../../component/addOrderCard/AddOrderCard';
import OrderListDetails from '../../component/orderListDetails/OrderListDetails';
import { get_food_service } from '../../store/foodServicesActionType';

const OrderCard = ({ visible }) => {
	const [addItemQuantity, setAddItemQuantity] = useState([]);
	const [additionalItemList, setadditionalItemList] = useState([]);
	const [visibleItem, setVisibleItem] = useState(false);
	const [divideFoodAdditionalItemList, setDivideFoodAdditionalItemList] =
		useState();
	const [additional, setAdditional] = useState();
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
		foodBranchOrderFoodAdditionalItems: null,
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

		let addAdditional = [...additionalList];
		for (let i = 0; i < additional?.length; i++) {
			const findAdditionalFood = additional[i];
			const b=[]
			// for (let j = 0; j < additionalItemList.length; j++) {
			// 	const a=additionalItemList[i]
			// }

			const foodAdditionals = { ...makeAdditional };
			foodAdditionals.foodAdditionalId = findAdditionalFood.id;
			foodAdditionals.title = findAdditionalFood.title;
			// console.log(	setAdditionalList(addAdditional););
			addAdditional.push(foodAdditionals);
			// addAdditional.push(additionals);
		}
		setAdditionalList(addAdditional);
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
		setAdditionalList([]);
		setAddItemQuantity([]);
		setVisibleItem(true);
	};

	const onSelect = (e) => {
		let addItemList = [...additionalItemList];
		for (let i = 0; i < additional.length; i++) {
			// console.log(additional[i].vendorFoodAdditionalItems);
			let itemList = additional[i].vendorFoodAdditionalItems.find(
				(data) => data.id == e
			);

			if (itemList != undefined) {
				let makeItem = { ...makeAdditionalItemList };
				makeItem.foodAdditionalItemId = itemList?.id;
				makeItem.price = itemList?.price;
				makeItem.title = itemList?.title;
				// console.log(makeItem);
				addItemList.push(makeItem);
			}
		}
		setadditionalItemList(addItemList);
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

		let divideAdditionalItemList = new Array(
			Math.ceil(additionalItemList.length / addItemQuantity.length)
		)
			.fill()
			.map((_) => additionalItemList.splice(0, addItemQuantity.length));
		setDivideFoodAdditionalItemList(divideAdditionalItemList);
	};
	console.log(additionalItemList);
	console.log(additionalList);
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
						divideFoodAdditionalItemList={divideFoodAdditionalItemList}
					/>
				</Col>
			</Row>
		</>
	);
};

export default OrderCard;
