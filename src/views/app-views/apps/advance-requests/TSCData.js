
import {  DislikeOutlined, CheckOutlined,
    PlusOutlined, ClockCircleOutlined, ReloadOutlined, ShareAltOutlined, BookOutlined, StopOutlined} from "@ant-design/icons";
    
    export const menuData = [
        {
            title: 'Pending',
            path: "pending-tsc-requests",
            icon: ClockCircleOutlined,
        },
        {
            title: 'Disbursed',
            path: "tsc-disbursed-requests",
            icon: CheckOutlined,
        },
        {
            title: 'Declined',
            path: "tsc-declined-requests",
            icon: StopOutlined,
        },
        {
            title: 'Booked', 
            path: "booked-tsc-requests",
            icon: BookOutlined,
        },

        {
            title: 'Pending Disbursed',
            path: "tsc-pending-disbursment",
            icon: ClockCircleOutlined
        },

        {
            title: 'TSC Approved Requests',
            path: "tsc-approved-requests",
            icon: CheckOutlined,
        },

        {
            title: 'Payslip Shared Requests',
            path: "tsc-shared-requests",
            icon: ShareAltOutlined,
        },
        
        {
            title: 'Revise Ability',
            path: "tsc-revised-ability-requests",
            icon: ReloadOutlined,
        },
        {
            title: 'Not on Payroll',
            path: "tsc-not-on-payroll-requests",
            icon: StopOutlined,
        },
        {
            title: 'Payroll DD Done',
            path: "tsc-payroll-dd-done-requests",
            icon: CheckOutlined,
        },
        {
            title: 'TSC Booked', 
            path: "tsc-tsc-booked-requests",
            icon: BookOutlined,
        },
        {
            title: 'Pending DD Booked', 
            path: "tsc-pending-dd-booked-requests",
            icon: ClockCircleOutlined,
        },

        {
            title: 'Pending Payslip Share', 
            path: "pending-payslip-share-tsc-requests",
            icon: ClockCircleOutlined,
        },

        {
            title: 'Payroll DD Pending', 
            path: "tsc-pending-dd-booked-requests",
            icon: ClockCircleOutlined,
        },
        {
            title: '@Payroll - Repeat Clients',
            path: "tsc-payroll-repeat-clients-requests",
            icon: ReloadOutlined,
        },
        {
            title: 'Declined By Clients',
            path: "tsc-declined-clients",
            icon: DislikeOutlined
        },
        {
            title: 'Pending Decline',
            path: "tsc-pending-decline-requests",
            icon: ClockCircleOutlined
        },
        {
            title: 'Compliance',
            path: "tsc-compliance",
            icon: CheckOutlined
        },
        
    ]
    