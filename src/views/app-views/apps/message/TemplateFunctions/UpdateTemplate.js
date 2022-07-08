import { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Space, Typography } from "antd";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getTemplate, updateTemplate } from "redux/actions/Messaging";
const { Text } = Typography;

function UpdateTemplate(props) {
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(null);
  const [template, setTemplate] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();

  const showModal = () => {
    setVisible(true);
    setTemplate(props.template);
  };

  useEffect(() => [props.loading]);

  const handleSubmit = (values) => {
    setUpdate(props.loading);
    console.log(values);
    setConfirmLoading(true);
    props.updateTemplate(params.id, values);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    if (props.message === "message created successful") {
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
        {props.message === "message created successful" ? (
          <Space>
            <Text type="success">
              <Space>
                <CheckCircleOutlined style={{ color: "green" }} />
                Template was updated successfully
              </Space>
            </Text>
          </Space>
        ) : (
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="horizontal"
            fields={[
              { name: "main_category", value: template.main_category },
              { name: "sub_category", value: template.sub_category },
              { name: "message", value: template.message },
            ]}
          >
            <Form.Item label="Main Category" name="main_category">
              <Input />
            </Form.Item>

            <Form.Item label="Sub Category" name="sub_category">
              <Input />
            </Form.Item>
            <Form.Item label="Message" name="message">
              <Input.TextArea />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ messaging }) => {
  const { template, loading, message } = messaging;

  return { template, loading, message };
};

const mapDispatchToProps = {
  getTemplate,
  updateTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTemplate);
