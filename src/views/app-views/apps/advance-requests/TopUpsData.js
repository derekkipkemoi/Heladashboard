import {
  ArrowDownOutlined,
  CheckOutlined,
  PlusOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
  StopOutlined,
  MoneyCollectOutlined,
  RedoOutlined
} from "@ant-design/icons";

export const TopUpsData = [
  {
    title: "Pending Requests",
    value: 7,
    amount: 2000,
    path: "topups-pending-requests",
    icon: ClockCircleOutlined,
    color: "#fba615"
  },
  {
    title: "Generated",
    value: 17,
    amount: 2000,
    path: "topups-pending-generated-top-ups",
    icon: PlusOutlined,
    color: "#00AB6F"
  },
  {
    title: "Generate Datasheets",
    value: 17,
    amount: 2000,
    path: "topups-pending-datasheet",
    icon: DatabaseOutlined,
    color: "#3e79f7"
  },
  {
    title: "@Payroll",
    value: 17,
    amount: 2000,
    path: "topups-payroll",
    icon: MoneyCollectOutlined,
    color: "#3e79f7"
  },
  {
    title: "Received From Payroll",
    value: 3,
    amount: 2000,
    path: "topups-received-from-payroll",
    icon: ArrowDownOutlined,
    color: "#00AB6F"
  },
  {
    title: "Compliance",
    value: 37,
    amount: 2000,
    path: "topups-compliance",
    icon: CheckOutlined,
    color: "#00AB6F"
  },
  {
    title: "Pending Disbursment",
    value: 37,
    amount: 2000,
    path: "topups-compliance",
    icon:  ClockCircleOutlined,
    color: "#fba615"
  },
  {
    title: "Revised",
    value: 7,
    amount: 2000,
    path: "topups-revised-ability",
    icon: RedoOutlined,
    color: "#00AB6F"
  },
  {
    title: "Disbursed",
    value: 7,
    amount: 2000,
    path: "topups-revised-ability",
    icon: CheckOutlined,
    color: "#00AB6F"
  },
  {
    title: "Declined",
    value: 30,
    amount: 2000,
    path: "topups-declined",
    icon: StopOutlined,
    color: "#ff6b72"
  },
];
