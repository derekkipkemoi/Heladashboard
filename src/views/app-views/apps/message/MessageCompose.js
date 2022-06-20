import React, { Component } from "react";
import { Form, Input, Button, message, Radio, Select, Row } from "antd";
import ReactQuill from "react-quill";
import companies from "assets/data/companies.json";

export class MailCompose extends Component {
  state = {
    checked: 1,
    size: "large",
    hallo: 1,
  };
  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
  };

  back = () => {
    this.props.history.goBack();
  };

  onFinish = (values) => {
    const { history } = this.props;
    message.success("Email has been sent");
    history.push(`inbox`);
  };

  onChange = (value) => {
    let current = value;
    console.log(`radio checked:${current}`);
    this.setState({
      checked: current,
    });
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  handleCompanyChange(value) {
    console.log("selected", value);
    this.setState({
      hallo: value,
    });
  }

  render() {
    const { size } = this.state;
    console.log("Size", size);
    return (
      <div className="mail-compose">
        <h4 className="mb-4">New Message</h4>

        <Button
          className="mr-4"
          onClick={() => {
            this.handleCompanyChange(this.state.checked);
          }}
        >
          Single / Multiple
        </Button>
        <Button
          onClick={() => {
            this.onChange(2);
          }}
        >
          Company
        </Button>

        {this.state.checked === "b" ? (
          <Select
            placeholder="Select company to send message"
            onChange={this.handleCompanyChange}
            style={{ width: "100%" }}
          >
            {}
          </Select>
        ) : null}
        <Form name="nest-messages" onFinish={this.onFinish} className="mt-3">
          <Form.Item name={["mail", "to"]}>
            <Input placeholder="To:" />
          </Form.Item>
          {/* <Form.Item name={["mail", "cc"]}>
            <Input placeholder="Cc:" />
          </Form.Item> */}
          {/* <Form.Item name={["mail", "subject"]}>
            <Input placeholder="Subject:" />
          </Form.Item> */}
          <Form.Item name={["mail", "content"]}>
            <ReactQuill theme="snow" modules={this.modules} />
          </Form.Item>
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

export default MailCompose;
