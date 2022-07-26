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
    title: "Generated",
    value: 17,
    amount: 2000,
    path: "stop-orders-generated",
    icon: FileOutlined,
  },
  {
    title: "Pending",
    value: 17,
    amount: 2000,
    path: "stop-orders-pending",
    icon: ClockCircleOutlined,
  },
  {
    title: "Generated Datasheet",
    value: 17,
    amount: 2000,
    path: "stop-orders-generated-datasheet",
    icon: DatabaseOutlined,
  },
  {
    title: "Payroll",
    value: 3,
    amount: 2000,
    path: "stop-orders-payroll",
    icon: MoneyCollectOutlined,
  },
  {
    title: "Received From Payroll",
    value: 37,
    amount: 2000,
    path: "stop-orders-received-from-payroll",
    icon: ArrowDownOutlined,
  },
  {
    title: "Closed",
    value: 7,
    amount: 2000,
    path: "stop-orders-closed",
    icon: CloseOutlined,
  },
  {
    title: "Declined",
    value: 30,
    amount: 2000,
    path: "stop-orders-declined",
    icon: StopOutlined,
  },
];
