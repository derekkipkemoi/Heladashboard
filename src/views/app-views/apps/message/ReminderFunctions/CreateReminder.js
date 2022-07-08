import { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Space, Typography } from "antd";
import { CheckCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createReminder } from "redux/actions/Messaging";
const { Text } = Typography;

function CreateReminder(props) {
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  useEffect(() => [props.loading]);

  const handleSubmit = (values) => {
    setUpdate(props.loading);
    props.createReminder(values);
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    if (props.message === "Reminder created successful") {
      window.location.reload();
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <PlusCircleOutlined />
        <span>Create Reminder</span>
      </Button>
      <Modal
        title="Update Reminder"
        visible={visible}
        onOk={form.submit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {props.message === "Reminder created successful" ? (
          <Space>
            <Text type="success">
              <Space>
                <CheckCircleOutlined style={{ color: "green" }} />
                Reminder was created successfully
              </Space>
            </Text>
          </Space>
        ) : (
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="horizontal"
            // fields={[
            //   { name: "days", value: reminder.days },
            //   { name: "target", value: reminder.target },
            //   { name: "text", value: reminder.text },
            //   { name: "type", value: reminder.type },
            //   { name: "status", value: reminder.status },
            //   { name: "phone", value: reminder.phone },
            // ]}
          >
            <Form.Item label="Days" name="days">
              <Input />
            </Form.Item>

            <Form.Item label="Target" name="target">
              <Input />
            </Form.Item>
            <Form.Item label="Text" name="text">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Type" name="type">
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ messaging }) => {
  const { loading, message } = messaging;
  console.log("Reminder Item in component", message);

  return { loading, message };
};

const mapDispatchToProps = {
  createReminder,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReminder);
