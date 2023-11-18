import ITaxesCalculator from "../interfaces/ITaxesCalculator";
import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";

export default class LowTaxCalculator implements ITaxesCalculator {
    private static instace: LowTaxCalculator;
    private constructor() {}

    public static GetInstance(): LowTaxCalculator {
        if (!LowTaxCalculator.instace)
            LowTaxCalculator.instace = new LowTaxCalculator();
        return this.instace;
    }

    public calculateTaxes(
        grossSalary: number,
        referenceSalary = RangeSalaries.LowSalary,
        taxPercentage = Percentages.LowPercentage,
        base = TaxBonus.LowMediumBonus
    ): number {
        if (grossSalary < 0)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.LowSalary}`
            );

        return Number(
            (base + (grossSalary - referenceSalary) * taxPercentage).toFixed(2)
        );
    }
}
