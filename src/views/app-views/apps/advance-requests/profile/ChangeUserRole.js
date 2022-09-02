import { useState } from "react";
import { Button, Modal, Form, Input, Space, Spin, Alert } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { changeUserRole } from "redux/actions/Users";

function ChangeUserRole(props) {
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = (values) => {
    console.log(values, params.id);
    setUpdate(true);
    props.changeUserRole(params.id);
    update(props.loadingUser);
    if (!props.loadingUser) {
      setVisible(false);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Button  block style={{ background: "#3e79f7", borderColor: "white", color:"white" }}  icon={<EditOutlined/>}>
        Update Advance Request
      </Button>
      <Modal
        title="Change User Role"
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        {update ? (
          <Spin tip="Updating user role...">
            <Alert message="Updating user role" type="info" />
          </Spin>
        ) : (
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              label="Role Name"
              name="item_name"
              rules={[{ required: true, message: "Please input role name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input email!" }]}
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
  changeUserRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserRole);
