import TaxCalculatorKey from "../interfaces/TaxCalculatorKey";
import HighTaxCalculator from "./HighTaxCalculator";
import LowTaxCalculator from "./LowTaxCalculator";
import MediumTaxCalculator from "./MediumTaxCalculator";
import TaxesCalculator from "./TaxesCalculator";
import UltraTaxCalculator from "./UltraTaxCalculator";

export default class TaxCalculatorRouter {
    private static instance: TaxCalculatorRouter;
    private TaxCalculatorWarehouse = {
        ultra: UltraTaxCalculator.GetInstance(),
        high: HighTaxCalculator.GetInstance(),
        medium: MediumTaxCalculator.GetInstance(),
        low: LowTaxCalculator.GetInstance(),
    };
    private constructor() {}

    public static GetInstance(): TaxCalculatorRouter {
        if (!TaxCalculatorRouter.instance) {
            TaxCalculatorRouter.instance = new TaxCalculatorRouter();
        }

        return TaxCalculatorRouter.instance;
    }

    private FindTaxCalculator(grossMonthlySalary: number): TaxCalculatorKey {
        if (grossMonthlySalary < 416220.01) {
            return "low";
        } else if (
            grossMonthlySalary > 416220.01 &&
            grossMonthlySalary < 624329.01
        ) {
            return "medium";
        } else if (
            grossMonthlySalary > 624329.01 &&
            grossMonthlySalary < 867123.01
        ) {
            return "high";
        }
        return "ultra";
    }

    public GetTaxCalculator(grossMonthlySalary: number): TaxesCalculator {
        const taxCalculatorKey: TaxCalculatorKey =
            this.FindTaxCalculator(grossMonthlySalary);
        return this.TaxCalculatorWarehouse[taxCalculatorKey];
    }
}
