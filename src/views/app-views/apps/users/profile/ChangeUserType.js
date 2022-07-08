import { useState } from "react";
import { Button, Modal, Form, Input, Space, Spin, Alert } from "antd";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { changeUserType } from "redux/actions/Users";

function ChangeUserType(props) {
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
    props.changeUserType(params.id);
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
      <Button size="small" type="primary" onClick={showModal}>
        Change User Type
      </Button>
      <Modal title="Change User Type" visible={visible} onOk={form.submit} onCancel={handleCancel}>
        {update ? (
          <Spin tip="Updating user type...">
            <Alert message="Updating user type" type="info" />
          </Spin>
        ) : (
          
            <Form form={form} onFinish={handleSubmit}>
              <Form.Item
                label="User Type"
                name="user_type"
                rules={[
                  { required: true, message: "Please input user type id!" },
                ]}
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
  changeUserType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserType);
