import { useState } from "react";
import { Button, Modal, Form, Typography } from "antd";
import Calculator from "components/shared-components/Calculator/Calculator";
import UpdateRequestCard from "./UpdateRequestCard";

const {Text} = Typography

function UpdateAdvanceRequest() {
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
        style={{ background: "#3e79f7", color: "white" }}
      >
        Update Advance Request
      </Button>
      <Modal
        title={<Text style={{color:"#3e79f7" }}>Add Datasheet Number</Text>}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <Calculator />
        <UpdateRequestCard />
      </Modal>
    </div>
  );
}

export default UpdateAdvanceRequest;
