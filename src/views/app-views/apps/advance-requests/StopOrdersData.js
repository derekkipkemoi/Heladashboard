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

export const StopOrdersData = [
  {
    title: "Generate",
    path: "stop-orders-generate",
    icon: FileOutlined,
  },
  {
    title: "Pending",
    path: "stop-order-pending",
    icon: ClockCircleOutlined,
  },
  {
    title: "Datasheet",
    path: "stop-order-datasheets",
    icon: DatabaseOutlined,
  },
  {
    title: "Payroll",
    path: "stop-order-payroll",
    icon: MoneyCollectOutlined,
  },
  {
    title: "Received From Payroll",
    path: "stop-order-processed",
    icon: ArrowDownOutlined,
  },
  {
    title: "Closed",
    path: "stop-order-closed",
    icon: CloseOutlined,
  },
  {
    title: "Declined",
    path: "stop-order-declined",
    icon: StopOutlined,
  },
];
