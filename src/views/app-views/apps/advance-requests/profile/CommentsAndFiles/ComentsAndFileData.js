import {
  FileSyncOutlined,
  PlusOutlined,
  CommentOutlined,
} from "@ant-design/icons";

export const data = [
  {
    key: 1,
    name: "Comments",
    pathname: "comments",
    icon: <CommentOutlined />,
  },
  {
    key: 2,
    name: "Registration Files",
    pathname: "registration-files",
    icon: <FileSyncOutlined />,
  },
  {
    key: 3,
    name: "Requests Files",
    pathname: "request-files",
    icon: <FileSyncOutlined />,
  },
  {
    key: 4,
    name: "Comment",
    pathname: "add-comment",
    icon: <PlusOutlined />,
  },
  {
    key: 5,
    name: "Registration File",
    pathname: "add-registration-file",
    icon: <PlusOutlined />,
  },
  {
    key: 6,
    name: "Request File",
    pathname: "add-request-file",
    icon: <PlusOutlined />,
  },
];
