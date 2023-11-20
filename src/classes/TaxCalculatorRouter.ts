import TaxCalculatorKey from "../interfaces/TaxCalculatorKey";
import HighTaxCalculator from "./HighTaxCalculator";
import LowTaxCalculator from "./LowTaxCalculator";
import MediumTaxCalculator from "./MediumTaxCalculator";
import TaxesCalculator from "./TaxesCalculator";
import UltraTaxCalculator from "./UltraTaxCalculator";

export default class TaxCalculatorRouter {
    private static instance: TaxCalculatorRouter;

    //Making an object with an instance of each tax-calculator class
    private TaxCalculatorWarehouse = {
        ultra: UltraTaxCalculator.GetInstance(),
        high: HighTaxCalculator.GetInstance(),
        medium: MediumTaxCalculator.GetInstance(),
        low: LowTaxCalculator.GetInstance(),
    };
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {}
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): TaxCalculatorRouter {
        if (!TaxCalculatorRouter.instance) {
            TaxCalculatorRouter.instance = new TaxCalculatorRouter();
        }

        return TaxCalculatorRouter.instance;
    }

    //Finding correct tax-calculator key to use acording to the annual gross salary
    private FindTaxCalculator(grossAnnualSalary: number): TaxCalculatorKey {
        if (grossAnnualSalary < 416220.01) {
            return "low";
        } else if (
            grossAnnualSalary > 416220.01 &&
            grossAnnualSalary < 624329.01
        ) {
            return "medium";
        } else if (
            grossAnnualSalary > 624329.01 &&
            grossAnnualSalary < 867123.01
        ) {
            return "high";
        }
        return "ultra";
    }

    //Finding the correct tax-calculator class according to the annual salary
    public GetTaxCalculator(grossAnnualSalary: number): TaxesCalculator {
        const taxCalculatorKey: TaxCalculatorKey =
            this.FindTaxCalculator(grossAnnualSalary);
        return this.TaxCalculatorWarehouse[taxCalculatorKey];
    }
}
