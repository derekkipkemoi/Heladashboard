import { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Space, Typography, Menu } from "antd";
import { StopOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Flex from "components/shared-components/Flex";
import { declineUser } from "redux/actions/Users";
const { Text } = Typography;

function DeclineUser(props) {
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();

  const showModal = () => {
    setVisible(true);
    const user = props.userDetails;
    console.log("User", user);
  };

  useEffect(() => [props.loadingUser]);

  const handleSubmit = (values) => {
    setUpdate(props.loadingUser);
    setConfirmLoading(true);
    console.log("id",props.userDetails.id, "5584")
    props.declineUser(props.userDetails.id)
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Menu.Item onClick={showModal}>
        <Flex alignItems="center">
          <StopOutlined style={{ color: "red" }} />
          <span className="ml-2">Decline User</span>
        </Flex>
      </Menu.Item>
      <Modal
        title="Decline User"
        visible={visible}
        width= "700px"
        onOk={form.submit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {props.message === "Registration has been declined" ? (
          <Space>
            <Text type="success">
              <Space>
                <CheckCircleOutlined style={{ color: "green" }} />
                Registration has been declined
              </Space>
            </Text>
          </Space>
        ) : (
          <Space>
            <Form
              form={form}
              onFinish={handleSubmit}
              fields={[
                {
                  name: "comment",
                  value:
                   "Dear " + props.userDetails.first_name +
                    ", Your Hela Pesa registration has been declined due to inadequate credit score. Please apply again after improving score",
                },
              ]}
            >
              <Form.Item
                label="Comment"
                name="comment"
                style={{ width: "200%", marginRight: 0 }}
                rules={[
                  { required: true, message: "Please input user comment!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Space>
        )}
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ usersList }) => {
  const { loadingUser, message } = usersList;
  console.log("Response", loadingUser);
  return {
    loadingUser,
    message,
  };
};

const mapDispatchToProps = {
    declineUser
};

export default connect(mapStateToProps, mapDispatchToProps)(DeclineUser);
