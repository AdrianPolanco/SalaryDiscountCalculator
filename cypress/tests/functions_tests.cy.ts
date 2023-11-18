import IFormData from "../../src/interfaces/IFormData";
import {
    calculateAnnualSalary,
    calculateDailySalary,
    calculateNetAnnualSalary,
    calculateTaxes,
} from "../../src/functions/calculateFunctions";
import useGrossController from "../../src/functions/useGrossController";
import IGrossResults from "../../src/interfaces/IGrossResults";
import GrossSalaryCalculator from "../../src/classes/GrossSalaryCalculator";
import ITaxesCalculator from "../../src/interfaces/ITaxesCalculator";
import { RangeSalaries } from "../../src/interfaces/enums/RangeSalaries";
import LowTaxCalculator from "../../src/classes/LowTaxCalculator";

describe("GrossSalaryCalculator unit tests", (): void => {
    const grossSalaryCalculator: GrossSalaryCalculator =
        GrossSalaryCalculator.GetInstance();
    it("Calculate gross annual salary", () => {
        expect(grossSalaryCalculator.calculateAnnualSalary(10000)).to.eql(
            120000
        );
    });

    it("Calculate daily gross salary", () => {
        cy.wrap(grossSalaryCalculator.calculateDailySalary(10000)).should(
            "be.closeTo",
            419.6,
            0.1
        );
    });

    /*  cy.wrap(calculateTaxes(1007786.16, 867123.01, 0.25, 79776)).should(
            "be.closeTo",
            114940.94,
            0.9
        ); */
});

function executeTaxCalculatorTest(
    taxCalculator: ITaxesCalculator,
    salary: number
): number {
    return taxCalculator.calculateTaxes(salary);
}

describe("TaxCalculator classes unit testing", () => {
    it(`Annual taxes of a gross annual salary is ${RangeSalaries.MediumSalary} >`, () => {
        const lowTaxtCalculator: LowTaxCalculator =
            LowTaxCalculator.GetInstance();

        const results = lowTaxtCalculator.calculateTaxes(300000);

        expect(results).to.eql(0);
    });
});

describe("Custom Hooks Testing", (): void => {
    it("Get gross salary data when monthly salary is 10000", () => {
        const mockData: IFormData = {
            rawMonthlySalary: 10000,
            fromDate: "2023-01-01",
            untilDate: "2001-11-06",
        };

        const grossResult: IGrossResults = useGrossController(mockData);

        expect(grossResult.annualGrossSalary).to.eql(120000);
        expect(grossResult.monthlyGrossSalary).to.eql(10000);
        cy.wrap(grossResult.dailySalary).should("be.closeTo", 419.67, 0.1);
    });
});
