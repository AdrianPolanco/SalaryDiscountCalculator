import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";
import TaxesCalculator from "./TaxesCalculator";

export default class HighTaxCalculator extends TaxesCalculator {
    private static instace: HighTaxCalculator;
    private constructor() {
        super();
    }

    public static GetInstance(): HighTaxCalculator {
        if (!HighTaxCalculator.instace)
            HighTaxCalculator.instace = new HighTaxCalculator();
        return this.instace;
    }

    public calculateTaxes(
        annualGrossSalary: number,
        referenceSalary = RangeSalaries.HighSalary,
        taxPercentage = Percentages.HightPercentage,
        base = TaxBonus.HighBonus
    ): number {
        if (annualGrossSalary < referenceSalary)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.HighSalary}`
            );

        return Number(
            (
                base +
                (annualGrossSalary - referenceSalary) * taxPercentage
            ).toFixed(2)
        );
    }
}
