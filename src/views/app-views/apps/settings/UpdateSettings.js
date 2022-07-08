import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  DatePicker,
  Row,
  Col,
  message,
  Upload,
  Select,
  Radio,
  Alert,
  Card,
  Spin,
  PageHeader,
} from "antd";
import { connect } from "react-redux";
import { ROW_GUTTER } from "constants/ThemeConstant";
import { getSettings, updateSettings } from "redux/actions/Settings";

class UpdateSettings extends Component {
  state = {
    setting: {},
    loading: false,
  };
  componentDidMount = () => {
    let setting = {};
    this.props.getSettings();
    setting = this.props.setting;
    this.setState({
      setting: setting,
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let setting = {};
      setting = this.props.setting;
      this.setState({
        setting: setting,
        loading: this.props.loading,
      });
      if (this.props.message === "Company setting updated successfuly") {
        message.success(this.props.message);
      }
    }
  };

  back() {
    this.props.history.goBack();
  }
  onFinish = (values) => {
    console.log("User update", values);
    this.setState({
      loading: true,
    });
    this.props.updateSettings(values);
  };
  render() {
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    let { setting } = this.state;
    return (
      <div>
        {this.state.loading ? (
          <Spin tip="Updating...">
            <Alert message="Updating settings" type="info" />
          </Spin>
        ) : (
          <Form
            name="basicInformation"
            layout="vertical"
            fields={[
              { name: "about_us", value: setting.about_us },
              { name: "min_amount", value: setting.min_amount },
              { name: "min_redeem_points", value: setting.min_redeem_points },
              { name: "interest_rate", value: setting.interest_rate },
              { name: "rollover_rate", value: setting.rollover_rate },
              {
                name: "min_commission_amount",
                value: setting.min_commission_amount,
              },
              { name: "automatic", value: setting.automatic },
              { name: "commission_rate", value: setting.commission_rate },
              { name: "points_rate", value: setting.points_rate },
              { name: "amount_per_point", value: setting.amount_per_point },
              { name: "whatsapp", value: setting.whatsapp },
              { name: "call_phone", value: setting.call_phone },
              { name: "email", value: setting.email },
            ]}
            onFinish={this.onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Card className="container">
              <PageHeader
                onBack={() => {
                  this.back();
                }}
                title="Update Company Settings"
              />
              <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Row gutter={ROW_GUTTER}>
                    <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
                      <Form.Item label="About" name="about_us">
                        <Input.TextArea style={{ height: 150 }} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Min Amount" name="min_amount">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item
                        label="Minimum Redeem Points"
                        name="min_redeem_points"
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Interest Rate" name="interest_rate">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Rollover Rate" name="rollover_rate">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item
                        label="Minimum Commission Amount"
                        name="min_commission_amount"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item
                        label="Disbursements Orientation"
                        name="automatic"
                      >
                        <Radio.Group size="small">
                          <Radio.Button value="automatic">
                            Automatic
                          </Radio.Button>
                          <Radio.Button value="manual">Manual</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Commission Rate" name="commission_rate">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Points Rate" name="points_rate">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item
                        label="Amount Per Point"
                        name="amount_per_point"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Phone" name="call_phone">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Mail" name="mail">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                      <Form.Item label="Whatsapp" name="whatsapp">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button type="primary" htmlType="submit">
                    Save Change
                  </Button>
                </Col>
              </Row>
            </Card>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ systemSettings }) => {
  const { setting, loading, message } = systemSettings;
  console.log("Settings in component", setting, loading);
  return {
    setting: setting,
    loading: loading,
    message: message,
  };
};

const mapDispatchToProps = {
  getSettings,
  updateSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSettings);
