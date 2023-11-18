import { calc } from "@chakra-ui/react";
import IFormData from "../interfaces/IFormData";
import IGrossResults from "../interfaces/IGrossResults";
import INetResults from "../interfaces/INetResults";
import ITaxes from "../interfaces/ITaxes";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import {
    calculateAnnualSalary,
    calculateDailySalary,
    calculateNetAnnualSalary,
    calculateMonthlyAmount,
    calculateTaxes,
} from "./calculateFunctions";

const useNetController = (data: IFormData) => {
    const grossSalaryPerYear = calculateAnnualSalary(data.rawMonthlySalary);
    let totalAnnualTaxes: number;
    if (grossSalaryPerYear < RangeSalaries.LowSalary) {
        totalAnnualTaxes = calculateTaxes(
            grossSalaryPerYear,
            RangeSalaries.LowSalary,
            0,
            0
        );
    } else if (
        grossSalaryPerYear >= RangeSalaries.LowSalary &&
        grossSalaryPerYear < RangeSalaries.MediumSalary
    ) {
        totalAnnualTaxes = calculateTaxes(
            grossSalaryPerYear,
            RangeSalaries.LowSalary,
            0.15,
            0
        );
    } else if (
        grossSalaryPerYear > RangeSalaries.MediumSalary &&
        grossSalaryPerYear < RangeSalaries.HighSalary
    ) {
        totalAnnualTaxes = calculateTaxes(
            grossSalaryPerYear,
            RangeSalaries.MediumSalary,
            0.25,
            31216
        );
    } else {
        totalAnnualTaxes = calculateTaxes(
            grossSalaryPerYear,
            RangeSalaries.HighSalary,
            0.25,
            79776
        );
    }
    const annualNetSalary = calculateNetAnnualSalary(
        grossSalaryPerYear,
        totalAnnualTaxes
    );
    const monthlyNetSalary: number = calculateMonthlyAmount(annualNetSalary);
    const dailyNetSalary: number = calculateDailySalary(monthlyNetSalary);
    const monthlyWithHolding: number = calculateMonthlyAmount(totalAnnualTaxes)
    const annualWithHolding: number = totalAnnualTaxes;
 
};

export default useNetController;
   /* const netResult: INetResults = {
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
    return netResult;*/