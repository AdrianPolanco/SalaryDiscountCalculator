import IGrossResults from "../interfaces/IGrossResults";
import INetResults from "../interfaces/INetResults";
import Calculator from "./Calculator";
import TaxesCalculator from "./TaxesCalculator";

export default class NetSalaryCalculator extends Calculator {
    private static instace: NetSalaryCalculator;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {
        super();
    }
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): NetSalaryCalculator {
        if (!NetSalaryCalculator.instace)
            NetSalaryCalculator.instace = new NetSalaryCalculator();
        return NetSalaryCalculator.instace;
    }

    //Calculating annual net salary according to DGII rules
    protected override calculateAnnualSalary(
        grossAnnualSalary: number,
        annualTaxes: number
    ) {
        return Number((grossAnnualSalary - annualTaxes).toFixed(2));
    }

    //Return all net-salary related data
    public getNetSalaryData(
        taxCalculator: TaxesCalculator,
        { annualGrossSalary }: IGrossResults
    ) {
        const annualWithHolding =
            taxCalculator.calculateTaxes(annualGrossSalary);
        const monthlyWithHolding =
            this.calculateMonthlyAmount(annualWithHolding);
        const annualNetSalary: number = this.calculateAnnualSalary(
            annualGrossSalary,
            annualWithHolding
        );
        const monthlyNetSalary: number =
            this.calculateMonthlyAmount(annualNetSalary);
        const dailyNetSalary: number =
            this.calculateDailySalary(monthlyNetSalary);

        const netResult: INetResults = {
            annualNetSalary,
            monthlyNetSalary,
            dailyNetSalary,
            monthlyWithHolding,
            annualWithHolding,
        };

        return netResult;
    }
}
