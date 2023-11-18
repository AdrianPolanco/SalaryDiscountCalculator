import IFormData from "../interfaces/IFormData";
import IGrossResults from "../interfaces/IGrossResults";
import Calculator from "./Calculator";

export default class GrossSalaryCalculator extends Calculator {
    private static instace: GrossSalaryCalculator;
    private constructor() {
        super();
    }
    public static GetInstance(): GrossSalaryCalculator {
        if (!GrossSalaryCalculator.instace)
            GrossSalaryCalculator.instace = new GrossSalaryCalculator();
        return this.instace;
    }

    public override calculateAnnualSalary(monthlySalary: number): number {
        return Number((monthlySalary * 12).toFixed(2));
    }

    public getGrossSalaryData({ rawMonthlySalary }: IFormData): IGrossResults {
        const grossResult: IGrossResults = {
            annualGrossSalary: this.calculateAnnualSalary(rawMonthlySalary),
            monthlyGrossSalary: rawMonthlySalary,
            dailySalary: this.calculateDailySalary(rawMonthlySalary),
        };
        return grossResult;
    }
}
