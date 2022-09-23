import {
  ArrowDownOutlined,
  PlusOutlined,
  CloseOutlined,
  DatabaseOutlined,
  StopOutlined,
  MoneyCollectOutlined,
  ClockCircleOutlined,
  FileOutlined,
} from "@ant-design/icons";

export const menuData = [
  {
    title: "Pending",
    path: "stop-order-pending",
    icon: ClockCircleOutlined,
    color: "#fba615"
  },
  {
    title: "Datasheet",
    path: "stop-order-datasheets",
    icon: DatabaseOutlined,
    color: "#3e79f7"
  },
  {
    title: "Payroll",
    path: "stop-order-payroll",
    icon: MoneyCollectOutlined,
    color: "#3e79f7"
  },
  {
    title: "Received From Payroll",
    path: "stop-order-processed",
    icon: ArrowDownOutlined,
    color: "#00AB6F"
  },
  {
    title: "Closed",
    path: "stop-order-closed",
    icon: CloseOutlined,
    color: "#00AB6F"
  },
  {
    title: "Declined",
    path: "stop-order-declined",
    icon: StopOutlined,
    color: "#ff6b72"
  },
  {
    title: "Generate",
    path: "stop-orders-generate",
    icon: FileOutlined,
    color: "#3e79f7"
  },
];
