import IFormData from "../interfaces/IFormData";
import IGrossResults from "../interfaces/IGrossResults";
import Calculator from "./Calculator";

export default class GrossSalaryCalculator extends Calculator {
    private static instace: GrossSalaryCalculator;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {
        super();
    }

    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): GrossSalaryCalculator {
        if (!GrossSalaryCalculator.instace)
            GrossSalaryCalculator.instace = new GrossSalaryCalculator();
        return GrossSalaryCalculator.instace;
    }

    //Overriding the method so we can provide the particular implementation of it
    protected override calculateAnnualSalary(monthlySalary: number): number {
        return Number((monthlySalary * 12).toFixed(2));
    }

    //Getting all gross-salary related data
    public getGrossSalaryData({
        grossMonthlySalary,
    }: IFormData): IGrossResults {
        const grossResult: IGrossResults = {
            annualGrossSalary: this.calculateAnnualSalary(grossMonthlySalary),
            monthlyGrossSalary: grossMonthlySalary,
            dailySalary: this.calculateDailySalary(grossMonthlySalary),
        };
        return grossResult;
    }
}
