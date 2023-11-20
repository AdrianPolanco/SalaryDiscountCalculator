import GrossSalaryCalculator from "../../src/classes/GrossSalaryCalculator";
import { RangeSalaries } from "../../src/interfaces/enums/RangeSalaries";
import LowTaxCalculator from "../../src/classes/LowTaxCalculator";
import MediumTaxCalculator from "../../src/classes/MediumTaxCalculator";
import HighTaxCalculator from "../../src/classes/HighTaxCalculator";
import UltraTaxCalculator from "../../src/classes/UltraTaxCalculator";
import TaxesCalculator from "../../src/classes/TaxesCalculator";
import NetSalaryCalculator from "../../src/classes/NetSalaryCalculator";
import IFormData from "../../src/interfaces/IFormData";
import IGrossResults from "../../src/interfaces/IGrossResults";
import INetResults from "../../src/interfaces/INetResults";
import VacationsCalculator from "../../src/classes/VacationsCalculator";
import ExperienceWarehouse from "../../src/classes/ExperienceWarehouse";
import Junior from "../../src/classes/Junior";

const grossSalaryCalculator: GrossSalaryCalculator =
    GrossSalaryCalculator.GetInstance();
const netSalaryCalculator: NetSalaryCalculator =
    NetSalaryCalculator.GetInstance();
const ultraTaxCalculator: UltraTaxCalculator = UltraTaxCalculator.GetInstance();
const highTaxCalculator: HighTaxCalculator = HighTaxCalculator.GetInstance();
const mediumTaxCalculatorTaxtCalculator: MediumTaxCalculator =
    MediumTaxCalculator.GetInstance();
const lowTaxCalculator: LowTaxCalculator = LowTaxCalculator.GetInstance();
const wareHouse: ExperienceWarehouse = ExperienceWarehouse.GetInstance();
const vacationCalculator: VacationsCalculator =
    VacationsCalculator.GetInstance(wareHouse);
const firstDate: Date = new Date("2023-11-19");
const secondDate: Date = new Date("2014-11-01");
// #region Former tests
describe("GrossSalaryCalculator class unit tests", (): void => {
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

    it("Calculate monthly gross salary", () => {
        expect(grossSalaryCalculator.calculateMonthlyAmount(120000)).to.eql(
            10000
        );
    });

    it("Get data about the gross salary", () => {
        const mockFormData: IFormData = {
            grossMonthlySalary: 16377,
            fromDate: "",
            untilDate: "",
        };
        const results: IGrossResults =
            grossSalaryCalculator.getGrossSalaryData(mockFormData);
        expect(results.monthlyGrossSalary).to.eql(16377);
        expect(results.annualGrossSalary).to.eql(196524);
        cy.wrap(results.dailySalary).should("be.closeTo", 687.24, 0.1);
    });
});
describe("NetSalaryCalculator class unit tests", (): void => {
    it("Calculate gross annual salary", () => {
        expect(
            netSalaryCalculator.calculateAnnualSalary(800000, 100000)
        ).to.eql(700000);
    });

    it("Calculate daily gross salary", () => {
        cy.wrap(netSalaryCalculator.calculateDailySalary(25367)).should(
            "be.closeTo",
            1064.4,
            0.1
        );
    });

    it("Calculate monthly gross salary", () => {
        expect(netSalaryCalculator.calculateMonthlyAmount(304404)).to.eql(
            25367
        );
    });

    it("Get data about the net salary", () => {
        const mockFormData: IFormData = {
            grossMonthlySalary: 83982.18,
            fromDate: "",
            untilDate: "",
        };
        const grossResults: IGrossResults =
            grossSalaryCalculator.getGrossSalaryData(mockFormData);
        const netResults: INetResults = netSalaryCalculator.getNetSalaryData(
            ultraTaxCalculator,
            grossResults
        );

        const {
            annualNetSalary,
            monthlyNetSalary,
            dailyNetSalary,
            monthlyWithHolding,
            annualWithHolding,
        } = netResults;

        cy.wrap(annualNetSalary).should("be.closeTo", 892845.22, 0.9);
        cy.wrap(monthlyNetSalary).should("be.closeTo", 74403.76, 0.9);
        cy.wrap(dailyNetSalary).should("be.closeTo", 3122.27, 0.9);
        cy.wrap(monthlyWithHolding).should("be.closeTo", 9578.4115, 0.9);
        cy.wrap(annualWithHolding).should("be.closeTo", 114940.94, 0.9);
    });
});

function executeTaxCalculatorTest(
    taxCalculator: TaxesCalculator,
    salary: number
): number {
    return taxCalculator.calculateTaxes(salary);
}

describe("TaxCalculator classes unit testing", () => {
    it(`Annual taxes of a gross annual salary is ${RangeSalaries.MediumSalary} >`, () => {
        const results = executeTaxCalculatorTest(lowTaxCalculator, 300000);

        expect(results).to.eql(0);
    });

    it(`Annual taxes of a gross annual salary is ${RangeSalaries.MediumSalary}> 527889.36 ${RangeSalaries.HighSalary} >`, () => {
        const results = executeTaxCalculatorTest(
            mediumTaxCalculatorTaxtCalculator,
            527889.36
        );

        cy.wrap(results).should("be.closeTo", 16750.4, 0.9);
    });

    it(`Annual taxes of a gross annual salary is ${RangeSalaries.HighSalary}> 840000 ${RangeSalaries.UltraSalary} >`, () => {
        const results = executeTaxCalculatorTest(highTaxCalculator, 840000);

        cy.wrap(results).should("be.closeTo", 74350, 0.9);
    });

    it(`Annual taxes of a gross annual salary is 1007786.16 > ${RangeSalaries.UltraSalary}`, () => {
        const results = executeTaxCalculatorTest(
            ultraTaxCalculator,
            1007786.16
        );

        cy.wrap(results).should("be.closeTo", 114940.94, 0.9);
    });
});
//#endregion
describe("Vacations calculation testing", () => {
    it("Working time method testing", () => {
        const years: number = vacationCalculator.calculateTime(
            firstDate,
            secondDate
        );
        expect(years).to.eql(9);
    });

    it("Testing experience warehouse class with junior level", () => {
        const experienceLevel = wareHouse.getExperienceLevel(0);
        const amount = experienceLevel.calculateAmount(50000);
        expect(amount).to.eql(0);
    });

    it("Testing experience warehouse class with mid-senior level", () => {
        const experienceLevel = wareHouse.getExperienceLevel(1);
        const amount = experienceLevel.calculateAmount(2098.19);
        cy.wrap(amount).should("be.closeTo", 29374.73, 0.1);
    });

    it("Testing experience warehouse class with senior level", () => {
        const experienceLevel = wareHouse.getExperienceLevel(6);
        const amount = experienceLevel.calculateAmount(3500.5);
        expect(amount).to.eql(63009);
    });
});

/* describe("Custom Hooks Testing", (): void => {
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
 */
