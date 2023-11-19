import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";
import TaxesCalculator from "./TaxesCalculator";

export default class MediumTaxCalculator extends TaxesCalculator {
    private static instace: MediumTaxCalculator;
    private constructor() {
        super();
    }

    public static GetInstance(): MediumTaxCalculator {
        if (!MediumTaxCalculator.instace)
            MediumTaxCalculator.instace = new MediumTaxCalculator();
        return MediumTaxCalculator.instace;
    }

    public calculateTaxes(
        annualGrossSalary: number,
        referenceSalary = RangeSalaries.MediumSalary,
        taxPercentage = Percentages.MediumPercentage,
        base = TaxBonus.LowMediumBonus
    ): number {
        if (annualGrossSalary < referenceSalary)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.MediumSalary}`
            );

        return Number(
            (
                base +
                (annualGrossSalary - referenceSalary) * taxPercentage
            ).toFixed(2)
        );
    }
}
