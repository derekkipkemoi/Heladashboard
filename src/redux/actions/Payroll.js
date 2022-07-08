import { PAYROLL_REGISTRATION, SAVE_PAYROLL_REGISTRATION } from "redux/constants/Payroll";

export const payRollRegistration = () => {
    return {
        type: PAYROLL_REGISTRATION
    }
}

export const savePayRollRegistration = (payRollRegistration) => {
    return {
        type: SAVE_PAYROLL_REGISTRATION,
        payRollRegistration
    }
}