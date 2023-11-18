import IFormData from "../../src/interfaces/IFormData";
import {
    calculateAnnualSalary,
    calculateDailySalary,
    calculateTaxes,
} from "../../src/functions/calculateFunctions";
import useGrossController from "../../src/functions/useGrossController";
import IGrossResults from "../../src/interfaces/IGrossResults";

describe("Calculate functions unit tests", (): void => {
    it("Calculate gross annual salary", () => {
        expect(calculateAnnualSalary(10000)).to.eql(120000);
    });

    it("Calculate daily gross salary", () => {
        cy.wrap(calculateDailySalary(10000)).should("be.closeTo", 419.6, 0.1);
    });

    it("Calculate annual taxes when annual salary is 1007786.16: 1007786.16 > 867123.01", () => {
        cy.wrap(calculateTaxes(1007786.16, 867123.01, 0.25, 79776)).should(
            "be.closeTo",
            114940.94,
            0.9
        );
    });

    it("Calculate annual taxes when annual salary is 840000: 867123 > 840000 > 624329.01", () => {
        cy.wrap(calculateTaxes(840000, 624329.01, 0.2, 31216)).should(
            "be.closeTo",
            74350,
            0.9
        );
    });

    it("Calculate annual taxes when annual salary is 527889.36: 624329 > 527889.36 > 416220.01", () => {
        cy.wrap(calculateTaxes(527889.36, 416220.01, 0.15, 0)).should(
            "be.closeTo",
            16750.4,
            0.9
        );
    });

    it("Calculate annual taxes when annual salary is 300000: 416220 > 300000", () => {
        expect(calculateTaxes(300000, 416220.01, 0, 0)).to.eql(0);
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
