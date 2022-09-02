import React from 'react'
import { Table } from 'antd';

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
    
  ];

export default function RegistrationFilesTables(props) {
  return (
    <div>
      <Table columns={columns} dataSource={props.data} />
    </div>
  )
}