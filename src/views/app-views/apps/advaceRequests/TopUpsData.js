
import {  ArrowDownOutlined, CheckOutlined,
    PlusOutlined, ClockCircleOutlined,DatabaseOutlined, StopOutlined, MoneyCollectOutlined} from "@ant-design/icons";
    
    export const TopUpsData = [
        {
            title: 'Pending Requests',
            value: 7,
            amount: 2000,
    path: "topups-pending-requests",
            icon: ClockCircleOutlined,
        },
        {
            title: 'Generated Top Ups',
            value: 17,
            amount: 2000,
    path: "topups-pending-generated-top-ups",
            icon: PlusOutlined,
        },
        {
            title: 'Datasheets',
            value: 17,
            amount: 2000,
            path: "topups-pending-datasheet",
            icon: DatabaseOutlined,
        },
        {
            title: 'Payroll',
            value: 17,
            amount: 2000,
            path: "topups-payroll",
            icon: MoneyCollectOutlined,
        },
        {
            title: 'Received From Payroll',
            value: 3,
            amount: 2000,
            path: "topups-received-from-payroll",
            icon: ArrowDownOutlined,
        },
        {
            title: 'Compliance',
            value: 37,
            amount: 2000,
            path: "topups-compliance",
            icon: CheckOutlined
        },
        {
            title: 'Revised Ability',
            value: 7,
            amount: 2000,
            path: "topups-revised-ability",
            icon: ClockCircleOutlined
        },
        {
            title: 'Declined',
            value: 30,
            amount: 2000,
            path: "topups-declined",
            icon: StopOutlined,
        }
    ]
    