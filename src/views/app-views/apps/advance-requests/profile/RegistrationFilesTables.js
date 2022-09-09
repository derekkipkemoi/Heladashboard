import React from 'react'
import { Table, Space } from 'antd';
import {
  DownloadOutlined, DeleteOutlined
} from "@ant-design/icons";

const columns = [
    {
      title: 'File ID',
      dataIndex: 'id',
      key: '1',
    },
    {
      title: 'User ID',
      dataIndex: 'user_id',
      key: '2',
    },
    {
      title: 'Uploader ID',
      dataIndex: 'uploader_id',
      key: '3',
    },
    {
      title: "Action",
      dataIndex: "file_location",
      key: "file_location",
      render: (text, record) => (
        <Space>
          <a>
            <DownloadOutlined />
          </a>
          <a>
            <DeleteOutlined style={{ color: "#ff0000" }} />
          </a>
        </Space>
      ),
    },
    
  ];

export default function RegistrationFilesTables(props) {
  return (
    <div>
      <Table columns={columns} dataSource={props.data} />
    </div>
  )
}
