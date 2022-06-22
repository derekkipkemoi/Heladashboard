import React, { Component } from "react";
import { Form, Input, Button, Select, Radio } from "antd";
import CompaniesData from "assets/data/companies.json";
const { Option } = Select;
const { TextArea } = Input;

class MessageCompose extends Component {
  state = {
    checked: "a",
  };
  onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    this.setState({
      checked: e.target.value,
    });
  };
  render() {
    console.log("Comoanies", CompaniesData);
    return (
      <div className="mail-compose">
        <h4 className="mb-4">New Message</h4>

        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          className="mb-4"
          onChange={this.onChange}
        >
          <Radio.Button value="a">Single / Multiple</Radio.Button>
          <Radio.Button value="b">Company</Radio.Button>
        </Radio.Group>
        {this.state.checked === "b" ? (
          <Select
          className="mb-4"
            placeholder="Select company to send message"
            onChange={this.handleCompanyChange}
            style={{ width: "100%" }}
          >
            {CompaniesData.map((company) => (
              <Option key={company.value}>{company.label}</Option>
            ))}
          </Select>
        ) : null}

        <Form name="nest-messages" onFinish={this.onFinish}>
          {this.state.checked === "a" ? (
            <div>
              <Form.Item name={["mail", "to"]}>
                <Input placeholder="To:" />
              </Form.Item>
            </div>
          ) : null}
          <TextArea rows={4} placeholder="Type message" />
          <Form.Item>
            <div className="mt-5 text-right">
              <Button type="link" className="mr-2">
                Save Darft
              </Button>
              <Button className="mr-2" onClick={this.back}>
                Discard
              </Button>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default MessageCompose;
