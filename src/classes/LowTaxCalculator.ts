import { Percentages } from "../interfaces/enums/Percentages";
import { RangeSalaries } from "../interfaces/enums/RangeSalaries";
import { TaxBonus } from "../interfaces/enums/TaxBonus";
import TaxesCalculator from "./TaxesCalculator";

export default class LowTaxCalculator extends TaxesCalculator {
    private static instace: LowTaxCalculator;
    //Making the constructor private so we only can get an instance from the GetInstance method

    private constructor() {
        super();
    }
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): LowTaxCalculator {
        if (!LowTaxCalculator.instace)
            LowTaxCalculator.instace = new LowTaxCalculator();
        return LowTaxCalculator.instace;
    }
    //Calculating taxes according to the rules settled by DGII
    public calculateTaxes(
        annualGrossSalary: number,
        referenceSalary = RangeSalaries.LowSalary,
        taxPercentage = Percentages.LowPercentage,
        base = TaxBonus.LowMediumBonus
    ): number {
        if (annualGrossSalary < 0)
            throw new Error(
                `Invalid argument:This class doesnt work with salaries lesser than${RangeSalaries.LowSalary}`
            );

        return Number(
            (
                base +
                (annualGrossSalary - referenceSalary) * taxPercentage
            ).toFixed(2)
        );
    }
}
