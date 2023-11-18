import ITaxesCalculator from "../interfaces/ITaxesCalculator";
import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";

export default class MediumTaxCalculator implements ITaxesCalculator {
    private static instace: MediumTaxCalculator;
    private constructor() {}

    public static GetInstance(): MediumTaxCalculator {
        if (!MediumTaxCalculator.instace)
            MediumTaxCalculator.instace = new MediumTaxCalculator();
        return this.instace;
    }

    public calculateTaxes(
        grossSalary: number,
        referenceSalary = RangeSalaries.MediumSalary,
        taxPercentage = Percentages.MediumPercentage,
        base = TaxBonus.LowMediumBonus
    ): number {
        if (grossSalary < referenceSalary)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.MediumSalary}`
            );

        return Number(
            (base + (grossSalary - referenceSalary) * taxPercentage).toFixed(2)
        );
    }
}
