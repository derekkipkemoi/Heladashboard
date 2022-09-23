import {
  DislikeOutlined,
  CheckOutlined,
  PlusOutlined,
  ClockCircleOutlined,
  ReloadOutlined,
  ShareAltOutlined,
  BookOutlined,
  StopOutlined,
} from "@ant-design/icons";

export const menuData = [
  {
    title: "Pending",
    path: "pending-tsc-requests",
    icon: ClockCircleOutlined,
    color: "#fba615",
  },
  {
    title: "Disbursed",
    path: "tsc-disbursed-requests",
    icon: CheckOutlined,
    color: "#00AB6F",
  },
  {
    title: "Declined",
    path: "tsc-declined-requests",
    icon: StopOutlined,
    color: "#ff6b72",
  },
  {
    title: "Booked",
    path: "booked-tsc-requests",
    icon: BookOutlined,
    color: "#00AB6F",
  },

  {
    title: "Pending Disbursed",
    path: "tsc-pending-disbursment",
    icon: ClockCircleOutlined,
    color: "#fba615",
  },

  {
    title: "TSC Approved Requests",
    path: "tsc-approved-requests",
    icon: CheckOutlined,
    color: "#00AB6F",
  },

  {
    title: "Payslip Shared Requests",
    path: "tsc-shared-requests",
    icon: ShareAltOutlined,
    color: "#3e79f7",
  },

  {
    title: "Revise Ability",
    path: "tsc-revised-ability-requests",
    icon: ReloadOutlined,
    color: "#3e79f7",
  },
  {
    title: "Not on Payroll",
    path: "tsc-not-on-payroll-requests",
    icon: StopOutlined,
    color: "#ff6b72",
  },
  {
    title: "Payroll DD Done",
    path: "tsc-payroll-dd-done-requests",
    icon: CheckOutlined,
    color: "#00AB6F",
  },
  {
    title: "TSC Booked",
    path: "tsc-tsc-booked-requests",
    icon: BookOutlined,
    color: "#00AB6F",
  },
  {
    title: "Pending DD Booked",
    path: "tsc-pending-dd-booked-requests",
    icon: ClockCircleOutlined,
    color: "#fba615",
  },

  {
    title: "Pending Payslip Share",
    path: "pending-payslip-share-tsc-requests",
    icon: ClockCircleOutlined,
    color: "#fba615",
  },

  {
    title: "Payroll DD Pending",
    path: "tsc-pending-dd-booked-requests",
    icon: ClockCircleOutlined,
    color: "#fba615",
  },
  {
    title: "@Payroll - Repeat Clients",
    path: "tsc-payroll-repeat-clients-requests",
    icon: ReloadOutlined,
    color: "#3e79f7",
  },
  {
    title: "Declined By Clients",
    path: "tsc-declined-clients",
    icon: DislikeOutlined,
    color: "#ff6b72"
  },
  {
    title: "Pending Decline",
    path: "tsc-pending-decline-requests",
    icon: ClockCircleOutlined,
    color: "#fba615",
  },
  {
    title: "Compliance",
    path: "tsc-compliance",
    icon: CheckOutlined,
    color: "#00AB6F",
  },
];
