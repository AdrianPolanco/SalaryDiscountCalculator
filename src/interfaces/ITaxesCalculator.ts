import { Percentages } from "./enums/Percentages";
import { RangeSalaries } from "./enums/RangeSalaries";
import { TaxBonus } from "./enums/TaxBonus";

export default interface ITaxesCalculator {
    calculateTaxes(grossSalary: number): number;
}
