import { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Space, Typography } from "antd";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getReminder, updateReminder } from "redux/actions/Messaging";
const { Text } = Typography;

function UpdateReminder(props) {
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(null);
  const [reminder, setReminder] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();

  const showModal = () => {
    setVisible(true);
    setReminder(props.reminder);
  };

  useEffect(() => [props.loading]);

  const handleSubmit = (values) => {
    setUpdate(props.loading);
    console.log(values);
    setConfirmLoading(true);
    props.updateReminder(params.id, values);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    if (props.message === "Message updated") {
      window.location.reload();
    }
  };

  return (
    <div>
      <Button
        type="primary"
        shape="circle"
        icon={<EditOutlined />}
        onClick={showModal}
      />
      <Modal
        title="Update Reminder"
        visible={visible}
        onOk={form.submit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {props.message === "Message updated" ? (
          <Space>
            <Text type="success">
              <Space>
                <CheckCircleOutlined style={{ color: "green" }} />
                Reminder was updated successfully
              </Space>
            </Text>
          </Space>
        ) : (
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="horizontal"
            fields={[
              { name: "days", value: reminder.days },
              { name: "target", value: reminder.target },
              { name: "text", value: reminder.text },
              { name: "type", value: reminder.type },
              { name: "status", value: reminder.status },
              { name: "phone", value: reminder.phone },
            ]}
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
  const { reminder, loading, message } = messaging;
  console.log("Reminder Item in component", reminder);

  return { reminder, loading, message };
};

const mapDispatchToProps = {
  getReminder,
  updateReminder,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateReminder);
