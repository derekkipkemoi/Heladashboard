import React, { Component } from "react";

import { Button, Modal, Form, Select, Checkbox, Radio, Typography } from "antd";
import { connect } from "react-redux";
import { changeUserType } from "redux/actions/Users";

const { Option } = Select;
const { Text } = Typography;

class AddDatasheetNumber extends Component {
  state = {
    visible: false,
  };
  onGenderChange = () => {};
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    const { visible } = this.state;
    
    return (
      <div>
        <Button
          block
          onClick={this.showModal}
          style={{
            backgroundColor: "#7c992c",
            color: "white",
          }}
        >
          Add Datasheet Number
        </Button>
        <Modal
          title={<Text style={{ color: "#7c992c" }}>Add Datasheet Number</Text>}
          visible={visible}
          onOk={this.showModal}
          onCancel={this.handleCancel}
          footer={[
            <diV>
              <Button key="submit"  onClick={this.handleCancel}>
                Cancel
              </Button>
              ,
              <Button key="submit" type="primary" onClick={this.handleCancel}>
                Submit
              </Button>
            </diV>,
          ]}
        >
          <Form>
            <Form.Item name="dataSheetType" label="Datasheet Type">
              <Select onChange={this.onGenderChange} allowClear>
                <Option value="default">1</Option>
                <Option value="topup">2</Option>
                <Option value="other">3</Option>
              </Select>
            </Form.Item>

            <Form.Item name="recent" label="recent">
              <Select onChange={this.onGenderChange} allowClear>
                <Option value="male">4</Option>
                <Option value="female">5</Option>
                <Option value="other">6</Option>
              </Select>
            </Form.Item>

            <Form.Item name="radio-group">
              <Radio.Group>
                <Radio value="a">Generate New (Optional)</Radio>
                <Radio value="b">Custom Datasheet (Optional)</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddDatasheetNumber);
