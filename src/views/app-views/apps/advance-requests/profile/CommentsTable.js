import React from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: 'File ID',
      dataIndex: 'id',
      key: '4',
    },
    {
      title: 'Request ID',
      dataIndex: 'request_id',
      key: '4',
    },
    {
      title: 'Commenter',
      dataIndex: 'commenter_id',
      key: '6',
    },
    
  ];

export default function CommentsTable(props) {
  return (
    <div>
      <Table columns={columns} dataSource={props.data} />
    </div>
  )
}
