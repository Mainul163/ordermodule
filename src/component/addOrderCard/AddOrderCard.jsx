import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get_food_service } from "../../store/foodServicesActionType";
import OrderModal from "../modal/OrderModal";

const AddOrderCard = ({ onCreate }) => {
  const [visible, setVisible] = useState(false);
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
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      {/* ********** Modal Component start end ****************/}
    </>
  );
};

export default AddOrderCard;
