export default abstract class Calculator {
    //Calculates daily salary according to DGII
    public calculateDailySalary(monthlySalary: number): number {
        return Number((monthlySalary / 23.83).toFixed(2));
    }
    //Calculates annual salary
    public calculateAnnualSalary(monthlySalary: number): number {
        return Number((monthlySalary * 12).toFixed(2));
    }
}
