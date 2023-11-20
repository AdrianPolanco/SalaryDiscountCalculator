import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";
import TaxesCalculator from "./TaxesCalculator";

export default class UltraTaxCalculator extends TaxesCalculator {
    private static instace: UltraTaxCalculator;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {
        super();
    }
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): UltraTaxCalculator {
        if (!UltraTaxCalculator.instace)
            UltraTaxCalculator.instace = new UltraTaxCalculator();
        return this.instace;
    }

    //Calculating taxes according to the rules settled by DGII
    public calculateTaxes(
        annualGrossSalary: number,
        referenceSalary = RangeSalaries.UltraSalary,
        taxPercentage = Percentages.UltraPercentage,
        base = TaxBonus.UltraBonus
    ): number {
        if (annualGrossSalary < referenceSalary)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than ${RangeSalaries.UltraSalary}`
            );

        return Number(
            (
                base +
                (annualGrossSalary - referenceSalary) * taxPercentage
            ).toFixed(2)
        );
    }
}
