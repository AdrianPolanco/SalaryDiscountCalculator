import ITaxesCalculator from "../interfaces/ITaxesCalculator";
import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";

export default class UltraTaxCalculator implements ITaxesCalculator {
    private static instace: UltraTaxCalculator;
    private constructor() {}

    public static GetInstance(): UltraTaxCalculator {
        if (!UltraTaxCalculator.instace)
            UltraTaxCalculator.instace = new UltraTaxCalculator();
        return this.instace;
    }

    public calculateTaxes(
        grossSalary: number,
        referenceSalary = RangeSalaries.UltraSalary,
        taxPercentage = Percentages.UltraPercentage,
        base = TaxBonus.UltraBonus
    ): number {
        if (grossSalary < referenceSalary)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.UltraSalary}`
            );

        return Number(
            (base + (grossSalary - referenceSalary) * taxPercentage).toFixed(2)
        );
    }
}
