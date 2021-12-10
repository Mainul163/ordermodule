import React from "react";
import { Row, Col } from "antd";
import AddOrderCard from "../../component/addOrderCard/AddOrderCard";
import OrderListDetails from "../../component/orderListDetails/OrderListDetails";

const OrderCard = () => {
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Row justify="space-around" style={{ marginTop: "20px" }}>
        <Col
          sm={24}
          lg={24}
          xl={11}
          xxl={10}
          style={{ border: "1px solid black" }}
        >
          <AddOrderCard onCreate={onCreate} />
        </Col>
        <Col
          sm={24}
          lg={24}
          xl={11}
          xxl={11}
          style={{ border: "1px solid black" }}
        >
          <OrderListDetails />
        </Col>
      </Row>
    </>
  );
};

export default OrderCard;
