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
    postPath: "",
    icon: <CommentOutlined />,
  },
  {
    key: 2,
    name: "Registration Files",
    pathname: "registration-files",
    postPath: "",
    icon: <FileSyncOutlined />,
  },
  {
    key: 3,
    name: "Requests Files",
    pathname: "request-files",
    postPath: "",
    icon: <FileSyncOutlined />,
  },
  // {
  //   key: 4,
  //   name: "Add Comment",
  //   pathname: "add-comment",
  //   postPath: "",
  //   icon: <PlusOutlined />,
  // },
  // {
  //   key: 5,
  //   name: "Add Registration File",
  //   pathname: "add-registration-file",
  //   postPath: "upload-registration-files?id=",
  //   icon: <PlusOutlined />,
  // },
  // {
  //   key: 6,
  //   name: "Add Request File",
  //   pathname: "add-request-file",
  //   postPath: "upload-file?id=",
  //   icon: <PlusOutlined />,
  // },
];
