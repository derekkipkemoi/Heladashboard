import { Table, Typography, Input, Row, Tooltip } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessagesList } from "redux/actions/Messaging";
const { Text, Link } = Typography;

const confirm = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });

const columns = [
  {
    title: "Contact",
    dataIndex: "contacts",
    key: "contact",
  },
  {
    title: "Target",
    dataIndex: "target",
    key: "target",
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
];

class AllMessages extends Component {
  state = {
    data: [],
  };

  viewMessageDetails = (id) => {
    const { match, history } = this.props;
    history.push(`${match.url}/${id}`);
  };

  componentDidMount() {
    let data = [];
    this.props.getMessagesList();
    data = this.props.messages;
    this.setState({
      data: data,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let data = [];
      data = this.props.messages;
      this.setState({
        data: data,
      });
    }
  };
  render() {
    return (
      <div>
        <Row justify="end">
          <div>
            <Input
              size="small"
              placeholder="Search"
              onChange={(e) => {
                this.search(e);
              }}
            />
          </div>
        </Row>

        <Table
          columns={columns}
          dataSource={this.state.data}
          onRow={(elm) => {
            return {
              onClick: (e) => {
                this.viewMessageDetails(elm.id);
                // e.preventDefault();
                // history.push(`${match.url}/${elm.id}`);
              },
            };
          }}
          rowKey="id"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { messages } = messaging;

  return { messages };
};

const mapDispatchToProps = {
  getMessagesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMessages);
