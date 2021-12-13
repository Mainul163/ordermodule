import React, { useEffect, useState } from "react";
import { Button } from "antd";

import OrderModal from "../modal/OrderModal";

const AddOrderCard = ({
  onCreate,
  additional,
  addItem,
  addItemQuantity,
  remove,
  onChange,
  visibleItem,
  foodServiceListData,
  onSelect
}) => {
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
        additional={additional}
        addItemQuantity={addItemQuantity}
        remove={remove}
        onChange={onChange}
        visibleItem={visibleItem}
        foodServiceListData={foodServiceListData}
        onSelect={onSelect}
        onCancel={() => {
          setVisible(false);
        }}
      />
      {/* ********** Modal Component start end ****************/}
    </>
  );
};

export default AddOrderCard;
