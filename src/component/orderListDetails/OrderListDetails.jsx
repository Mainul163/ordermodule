import React from "react";
import { Card } from "antd";
import "./OrderListDetails.css";
const OrderListDetails = ({ branchOrderFoodAdditionals }) => {
  return (
    <div className="site-card-border-less-wrapper">
      {branchOrderFoodAdditionals.map((data, index) => (
        <Card
          title={data.title}
          key={index}
          bordered={false}
          style={{ width: 300, marginBottom: "10px" }}
        >
          <p>Card content</p>
        </Card>
      ))}
    </div>
  );
};

export default OrderListDetails;
