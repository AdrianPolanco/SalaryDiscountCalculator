import Calculator from "./Calculator";

export default class GrossSalaryCalculator extends Calculator {
    private static instace: GrossSalaryCalculator;
    private constructor() {
        super();
    }
    public static GetInstance(): GrossSalaryCalculator {
        if (!GrossSalaryCalculator.instace)
            GrossSalaryCalculator.instace = new GrossSalaryCalculator();
        return this.instace;
    }
}
