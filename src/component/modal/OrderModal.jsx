import React, { useState } from "react";
import { Button, Modal, Form, Select, Input, Row, Col, Tag } from "antd";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

// *************** component start *********************
const OrderModal = ({
  visible,
  onCreate,
  onCancel,
  additional,
  addItem,
  addItemQuantity,
  remove,
  onChange,
  visibleItem,
  foodServiceListData
}) => {
  const [form] = Form.useForm();

  // const [visibleItem, setVisibleItem] = useState(false);
  // const [addItemQuantity, setAddItemQuantity] = useState([[]]);
  // const [additional, setAdditional] = useState();
  // const addItems = (e) => {
  // 	const items = [...addItemQuantity];
  // 	items.push([null]);
  // 	setAddItemQuantity(items);
  // };
  // const remove = (e) => {
  //   if (addItemQuantity.length > 1) {
  //     const removeList = addItemQuantity?.filter(
  //       (data, index) => index + 1 !== e
  //     );
  //     setAddItemQuantity(removeList);
  //   }
  // };
  // const onChange = (e) => {
  //   const additionals = foodServiceListData.foodService.foodService.find(
  //     (data) => data.id == e
  //   );

  //   setAdditional(additionals?.vendorFoodAdditionals);
  //   setVisibleItem(true);
  // };

  const getFields = () => {
    const children = [];
    for (let i = 0; i < addItemQuantity?.length; i++) {
      children.push(
        <Col span={24} key={i}>
          <Row gutter={24}>
            {additional?.map((data, index) => (
              <Col span={8} key={index}>
                <Form.Item
                  label={i + 1 + "." + data.title}
                  name={i + 1 + "." + data.title}
                  rules={[{ required: true, message: "Missing sight" }]}
                >
                  <Select key={i}>
                    {data?.vendorFoodAdditionalItems?.map((item) => (
                      <Option key={i} value={item.id}>
                        {item.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            ))}
            <Col span={8}>
              <MinusCircleOutlined onClick={() => remove(i + 1)} />
            </Col>
          </Row>
        </Col>
      );
    }
    return children;
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();

              onCreate(values, additional, addItemQuantity);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Row gutter={24} justify="space-between">
            <Col span={11}>
              <Form.Item
                name="foodItemId"
                label="Food Items"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  allowClear
                  onChange={onChange}
                >
                  {foodServiceListData.foodService.foodService.map(
                    (foods, index) => (
                      <Option value={foods.id} key={index}>
                        {foods.title}
                      </Option>
                    )
                  )}
                </Select>
              </Form.Item>
            </Col>
            {visibleItem && (
              <Col span={10}>
                <Form.Item label={`quantity`} name={`quantity`}>
                  <Tag color="magenta">{addItemQuantity?.length}</Tag>
                </Form.Item>
              </Col>
            )}
          </Row>
          {visibleItem && <Row gutter={24}>{getFields()}</Row>}
          {visibleItem && (
            <Form.Item>
              <Button type="primary" onClick={() => addItem("hi")}>
                ADD food quantity
              </Button>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default OrderModal;
