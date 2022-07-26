import {
  Table,
  Typography,
  Input,
  Row,
  Tooltip,
  Tag,
  Menu,
  Col,
  Popconfirm,
  message,
} from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getReminderList, deleteReminder } from "redux/actions/Messaging";
import Flex from "components/shared-components/Flex";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CreateReminder from "./ReminderFunctions/CreateReminder";
const { Text, Link } = Typography;

class ReminderMessages extends Component {
  state = {
    data: [],
    visible: false,
    confirmLoading: false,
  };

  deleteReminder = (row) => {
    console.log("Row id", row);
    this.setState({
      confirmLoading: true,
    });
    this.props.deleteReminder(row);
    setTimeout(() => {
      let data = [];
      this.props.getReminderList();
      data = this.props.reminderList;
      this.setState({
        data: data,
      });
      this.setState({
        confirmLoading: false,
        visible: false,
      });
    }, 2000);
  };

  viewReminder = (id) => {
    this.props.history.push(`/app/apps/message/reminder-messages/${id}`);
    // const { match, history } = this.props;
    // // console.log("This props", this.props, id)
    //   history.push(`${match.url}/${id}`);
  };

  showPopconfirm = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    if (this.props.message === "Message deleted successful") {
      window.location.reload();
    }
  };

  dropdownMenu = (row) => (
    <Menu>
      <Menu.Item onClick={(e) => this.viewReminder(row)}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">View Reminder</span>
        </Flex>
      </Menu.Item>

      {/* <Menu.Item>
        <Flex alignItems="center">
          <CheckOutlined />
          <span className="ml-2">Update Message</span>
        </Flex>
      </Menu.Item> */}

      <Menu.Item style={{ color: "red" }}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <Popconfirm
            title="Are you sure ?"
            visible={this.state.visible}
            onConfirm={(e) => this.deleteReminder(row)}
            okButtonProps={{ loading: this.state.confirmLoading }}
            onCancel={(e) => this.handleCancel()}
          >
            <span onClick={(e) => this.showPopconfirm()} className="p-2">
              Delete Reminder
            </span>
          </Popconfirm>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  viewMessageDetails = (id) => {
    const { match, history } = this.props;
    history.push(`${match.url}/${id}`);
  };

  componentDidMount() {
    let data = [];
    this.props.getReminderList();
    data = this.props.reminderList;
    this.setState({
      data: data,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let data = [];
      data = this.props.reminderList;
      this.setState({
        data: data,
      });

      if (this.props.message === "Message deleted successful") {
        message.success("Message deleted successfuly");
      }
    }
  };

  filterData(inputValue) {
    const data = this.state.data;
    const filtered = data.filter(
      (item) =>
        item.phone.includes(inputValue) ||
        item.status.includes(inputValue) ||
        item.text.includes(inputValue) ||
        item.days.includes(inputValue)
    );

    this.setState({
      data: filtered,
    });
  }

  onSearch = (event) => {
    const inputValue = event.target.value;
    this.filterData(inputValue);

    if (inputValue.length <= 0) {
      this.setState({
        data: this.props.reminderList,
      });
    }
  };
  render() {
    const columns = [
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        render: (text, record) =>
          record.phone === "" ? (
            <Tag color="yellow">Not Set</Tag>
          ) : (
            record.phone
          ),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (text, record) =>
          record.status === "inactive" ? (
            <Tag color="yellow">Inactive</Tag>
          ) : (
            <Tag color="green">Active</Tag>
          ),
      },
      {
        title: "Message",
        dataIndex: "text",
        key: "text",
        ellipsis: true,
        render: (text, record) => (
          <Link type="info">
            <Tooltip title={`${record.text}`}>{text}</Tooltip>
          </Link>
        ),
      },
      {
        title: "Days",
        dataIndex: "days",
        key: "Days",
      },
      {
        title: "",
        dataIndex: "actions",
        fixed: "right",
        render: (_, record) => (
          <div className="text-right">
            <EllipsisDropdown menu={this.dropdownMenu(record.id)} />
          </div>
        ),
      },
    ];
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={18}>
            <div>
              <CreateReminder />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
            <Input
                size="small"
                placeholder="Search"
                onChange={(e) => {
                  this.onSearch(e);
                }}
              />
            </div>
          </Col>
        </Row>

        <Table columns={columns} dataSource={this.state.data} rowKey="id" />
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { reminderList, message } = messaging;
  console.log("Template list in component", message);
  return { reminderList, message };
};

const mapDispatchToProps = {
  getReminderList,
  deleteReminder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderMessages);
