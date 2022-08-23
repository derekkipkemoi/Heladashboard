import { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Space, Typography } from "antd";
import { CheckCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { deactivateUser } from "redux/actions/Users";
const { Text } = Typography;

function DeactivateUser(props) {
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();

  const showModal = () => {
    setVisible(true);
  };

  useEffect(() => [props.loadingUser]);

  const handleSubmit = (values) => {
    setUpdate(props.loadingUser);
    setConfirmLoading(true);
    props.deactivateUser(params.id, values);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Button size="small" type="primary"  icon={<DownloadOutlined/>} >
        Download Application
      </Button>
      <Modal
        title="Deactivate User"
        visible={visible}
        onOk={form.submit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {props.message === "user was deactivated successfully" ? (
          <Space>
            <Text type="success">
              <Space>
                <CheckCircleOutlined style={{ color: "green" }} />
                User was deactivated successfully
              </Space>
            </Text>
          </Space>
        ) : (
          
            <Form form={form} onFinish={handleSubmit}>
              <Form.Item
                label="Status"
                name="user_status"
                rules={[
                  { required: true, message: "Please input user status!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Reason"
                name="reason"
                rules={[{ required: true, message: "Please input reason!" }]}
              >
                <Input />
              </Form.Item>
            </Form>
          
        )}
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ usersList }) => {
  const { loadingUser, message } = usersList;
  return {
    loadingUser,
    message,
  };
};

const mapDispatchToProps = {
  deactivateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeactivateUser);
