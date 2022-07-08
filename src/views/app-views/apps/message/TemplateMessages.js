import { Table, Typography, Input, Row, Tooltip, Popconfirm, Menu, message, Col} from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { EyeOutlined, DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { getTemplateList, deleteTemplate, messageUpdate} from "redux/actions/Messaging";
import CreateTemplate from "./TemplateFunctions/CreateTemplate";
const { Text, Link } = Typography;

const confirm = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });

class TemplateMessages extends Component {
  state = {
    data: [],
    visible: false,
    confirmLoading: false,
  };

  viewTemplate = (id) => {
    this.props.history.push(`/app/apps/message/template-messages/${id}`);
    // const { match, history } = this.props;
    // // console.log("This props", this.props, id)
    //   history.push(`${match.url}/${id}`);
  };


  deleteTemplate = (row) => {
    console.log("Row id", row);
    this.setState({
      confirmLoading: true,
    });
    this.props.deleteTemplate(row);
    setTimeout(() => {
      let data = [];
      this.props.getTemplateList();
      data = this.props.templateList;
      this.setState({
        data: data,
      });
      this.setState({
        confirmLoading: false,
        visible: false,
      });
    }, 2000);
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
    if (this.props.message === "Sample message deleted successful") {
      window.location.reload();
      this.props.messageUpdate()
    }
  };

  dropdownMenu = (row) => (
    <Menu>
      <Menu.Item onClick={(e) => this.viewTemplate(row)}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">View Template Message</span>
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
            onConfirm={(e) => this.deleteTemplate(row)}
            okButtonProps={{ loading: this.state.confirmLoading }}
            onCancel={(e) => this.handleCancel()}
          >
            <span onClick={(e) => this.showPopconfirm()} className="p-2">
              Delete Template Message
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
    this.props.getTemplateList();
    data = this.props.templateList;
    this.setState({
      data: data,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let data = [];
      data = this.props.templateList;
      this.setState({
        data: data,
      });
      if (this.props.message === "Sample message deleted successful") {
        message.success("Sample message deleted successful");
      }
    }
  };
  render() {
    const columns = [
      {
        title: "Main Category",
        dataIndex: "main_category",
        key: "main_category",
      },
      {
        title: "Sub Category",
        dataIndex: "sub_category",
        key: "sub_category",
      },
      {
        title: "Message",
        dataIndex: "message",
        key: "message",
        ellipsis: true,
        render: (text, record) => (
          <Link type="info">
            <Tooltip title={`${record.message}`}>{text}</Tooltip>
          </Link>
        ),
      },
      {
        title: "Created At",
        dataIndex: "created_at",
        key: "createdAt",
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
              <CreateTemplate />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Input
                size="small"
                placeholder="Search"
                onChange={(e) => {
                  this.search(e);
                }}
              />
            </div>
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={this.state.data}
          rowKey="id"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { templateList, message } = messaging;
  return { templateList, message };
};

const mapDispatchToProps = {
  getTemplateList,deleteTemplate, messageUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateMessages);
