import IGrossResults from "../interfaces/IGrossResults";
import INetResults from "../interfaces/INetResults";
import Calculator from "./Calculator";
import TaxesCalculator from "./TaxesCalculator";

export default class NetSalaryCalculator extends Calculator {
    private static instace: NetSalaryCalculator;
    private constructor() {
        super();
    }
    public static GetInstance(): NetSalaryCalculator {
        if (!NetSalaryCalculator.instace)
            NetSalaryCalculator.instace = new NetSalaryCalculator();
        return this.instace;
    }

    public override calculateAnnualSalary(
        grossAnnualSalary: number,
        annualTaxes: number
    ) {
        return Number((grossAnnualSalary - annualTaxes).toFixed(2));
    }

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
