//Defining the abstract class Calculator
export default abstract class Calculator {
    //Calculates daily salary according to DGII
    public calculateDailySalary(monthlySalary: number): number {
        return Number((monthlySalary / 23.83).toFixed(2));
    }
    //Calculates monthly amounts
    public calculateMonthlyAmount(annualAmount: number): number {
        return Number((annualAmount / 12).toFixed(2));
    }
    //Calculates annual salary
    protected abstract calculateAnnualSalary(
        monthlySalary: number,
        totalTaxes?: number
    ): number;
}
