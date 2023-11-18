import IFormData from "../interfaces/IFormData";
import IGrossResults from "../interfaces/IGrossResults";
import {
    calculateAnnualSalary,
    calculateDailySalary,
} from "./calculateFunctions";

const useGrossController = (data: IFormData): IGrossResults => {
    const grossResult: IGrossResults = {
        annualGrossSalary: calculateAnnualSalary(data.rawMonthlySalary),
        monthlyGrossSalary: data.rawMonthlySalary,
        dailySalary: calculateDailySalary(data.rawMonthlySalary),
    };
    return grossResult;
};

export default useGrossController;
