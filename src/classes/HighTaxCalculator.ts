import ITaxesCalculator from "../interfaces/ITaxesCalculator";
import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";

export default class HightTaxCalculator implements ITaxesCalculator {
    private static instace: HightTaxCalculator;
    private constructor() {}

    public static GetInstance(): HightTaxCalculator {
        if (!HightTaxCalculator.instace)
            HightTaxCalculator.instace = new HightTaxCalculator();
        return this.instace;
    }

    public calculateTaxes(
        grossSalary: number,
        referenceSalary = RangeSalaries.HighSalary,
        taxPercentage = Percentages.HightPercentage,
        base = TaxBonus.HighBonus
    ): number {
        if (grossSalary < referenceSalary)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.HighSalary}`
            );

        return Number(
            (base + (grossSalary - referenceSalary) * taxPercentage).toFixed(2)
        );
    }
}
