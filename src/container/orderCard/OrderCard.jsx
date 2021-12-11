import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddOrderCard from "../../component/addOrderCard/AddOrderCard";
import OrderListDetails from "../../component/orderListDetails/OrderListDetails";
import { get_food_service } from "../../store/foodServicesActionType";

const OrderCard = () => {
  const [branchOrderFoodAdditionals, setBranchOrderFoodAdditionals] = useState(
    []
  );

  const [makeOrderFoods, setMakeOrderFoods] = useState({
    foodId: null,
    quantity: null,
    regularPrice: null,
    tableToServe: 1,
    title: null,
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
  const onCreate = (values, addItemQuantity) => {
    console.log("Received values of form: ", values, addItemQuantity);
    //* ************  find the food list ****************
    if (addItemQuantity.length > 0) {
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
      for (let i = 0; i < addItemQuantity.length; i++) {
        const findAdditionalFood = addItemQuantity[i];
        console.log(findAdditionalFood);
        for (let i = 0; i < findAdditionalFood.length; i++) {
          const a = findAdditionalFood[i];
          console.log("........", a.vendorFoodAdditionalItems);
          //   const orderAdditional = { ...makeAdditional };
          //   orderAdditional.foodAdditionalId = a.id;
          //   orderAdditional.title = a.title;
          //   const additional = [...additionalList];
          //   additional.push(orderAdditional);
          //   setAdditionalList(additional);
        }
      }
    } else {
      console.log("add quantity");
    }
  };
  console.log("........", additionalList);
  return (
    <>
      <Row justify="space-around" style={{ marginTop: "20px" }}>
        <Col sm={24} lg={24} xl={11} xxl={10}>
          <AddOrderCard
            onCreate={onCreate}
            foodServiceListData={foodServiceListData}
          />
        </Col>
        <Col sm={24} lg={24} xl={11} xxl={11}>
          <OrderListDetails
            branchOrderFoodAdditionals={branchOrderFoodAdditionals}
          />
        </Col>
      </Row>
    </>
  );
};

export default OrderCard;
