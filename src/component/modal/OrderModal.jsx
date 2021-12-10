import React, { useState } from "react";
import { Button, Modal, Form, Select, Input, Row, Col } from "antd";
const { Option } = Select;

// *************** component start *********************
const OrderModal = ({ visible, onCreate, onCancel, foodServiceListData }) => {
  const [form] = Form.useForm();
  const [addItem, setAddItem] = useState([[]]);
  const addItems = () => {
    const items = [...addItem];
    items.push([null]);
    setAddItem(items);
  };
  const getFields = () => {
    const children = [];
    for (let i = 0; i < addItem.length; i++) {
      children.push(
        <Col span={24} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        
        </Col>
        
      );
    }
    return children;
  };

  console.log(addItem.length);
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
              onCreate(values);
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
          <Row gutter={24}>{getFields()}</Row>
          <Form.Item>
            <Button type="primary" onClick={addItems}>
              ADD food quantity
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default OrderModal;
