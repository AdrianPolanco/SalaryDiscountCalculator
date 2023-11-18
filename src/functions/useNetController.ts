import IFormData from "../interfaces/IFormData";
import IGrossResults from "../interfaces/IGrossResults";
import INetResults from "../interfaces/INetResults";
import ITaxes from "../interfaces/ITaxes";
import {
    calculateAnnualSalary,
    calculateDailySalary,
} from "./calculateFunctions";

const useNetController = (data: IFormData): INetResults => {
    const netResult: INetResults = {
        annualNetSalary: 0,
        monthlyNetSalary: 0,
        dailyNetSalary: 0,
        monthlyWithHolding: 0,
        annualWithHolding: 0,
        taxes: {
            taxes: [],
            totalAmount: 0
        }
    };
    return netResult;
};

export default useNetController;
