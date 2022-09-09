import { useState } from "react";
import { Button, Modal, Form, Typography } from "antd";
import Calculator from "components/shared-components/Calculator/Calculator";
import UpdateRequestCard from "./UpdateRequestCard";

const { Text } = Typography;

function UpdateAdvanceRequest(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };



  return (
    <div>
      <Button
        onClick={showModal}
        block
        style={{ background: "#00AB6F", color: "white" }}
      >
        Update Advance Request
      </Button>
      <Modal
        title={<Text style={{ color: "#00AB6F" }}>UPDATE ADVANCE REQUEST</Text>}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleCancel}
          >
            Close
          </Button>,
        ]}
      >
        <Calculator />
        <UpdateRequestCard {...props} />
      </Modal>
    </div>
  );
}

export default UpdateAdvanceRequest;
