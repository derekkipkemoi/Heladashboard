
import {  AreaChartOutlined, StopOutlined, DatabaseOutlined, DislikeOutlined, WarningOutlined, MinusOutlined, CheckOutlined,
	PlusOutlined, ClockCircleOutlined, BookOutlined, ShareAltOutlined} from "@ant-design/icons";

export const menuData = [
    {
      path: "pending",
      icon: ClockCircleOutlined,
    },
	{
      title: 'Disbursed Requests',
      path: "all-advance-requests-disbursed",
      icon: CheckOutlined
    },
	{
      title: 'Declined',
      path: "all-advance-requests-declined-by-clients",
      icon: DislikeOutlined
    },
    {
      title: 'Booked',
      path: "all-advance-booked",
      icon: BookOutlined,
    },
	  {
      title: 'Pending Disbursment',
      path: "all-advance-requests-pending-disbursment",
      icon: ClockCircleOutlined
    },
	 {
      title: 'Approved',
      path: "all-advance-requests-approved",
      icon: CheckOutlined
    },
	  {
      title: 'Payslip Share',
      path: "all-advance-requests-payslip-shared",
      icon: ShareAltOutlined,
    },
	{
      title: 'Revised Ability',
      path: "all-advance-requests-revised-ability",
      icon: CheckOutlined,
    },
	  {
      title: 'Not On Payroll',
      path: "all-advance-requests-not-payroll",
      icon: StopOutlined
    },
	   {
      title: 'Payroll DD Done',
      path: "all-advance-requests-payroll-dd-done",
      icon: CheckOutlined
    },
	   {
      title: 'Pending DD Booked',
      path: "all-advance-requests-pending-dd-booked",
      icon: ClockCircleOutlined
    },
	 {
      title: 'Pending Payslip Share',
      path: "all-advance-requests-pending-payslip",
      icon: ClockCircleOutlined,
    },
	{
      title: 'DD Pending',
      path: "all-advance-requests-payroll-dd-pending",
      icon: ClockCircleOutlined
    },
	{
      title: '@Payroll - Repeat Clients',
      path: "all-advance-requests-payroll-repeat-clients",
      icon: ClockCircleOutlined
    },
	{
      title: 'Declined By Clients',
      path: "all-advance-requests-decline-by-clients",
      icon: DislikeOutlined
    },
	{
      title: 'Pending Decline',
      path: "all-advance-requests-pending-decline",
      icon: ClockCircleOutlined
    },
	{
      title: 'Compliance',
      path: "all-advance-requests-compliance",
      icon: CheckOutlined
    }
  ]
