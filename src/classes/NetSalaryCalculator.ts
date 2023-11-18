import Calculator from "./Calculator";

export default class NetSalaryCalculator extends Calculator {
    private static instace: NetSalaryCalculator;
    private constructor() {
        super();
    }
    public static GetInstance(): NetSalaryCalculator {
        if (!NetSalaryCalculator.instace)
            NetSalaryCalculator.instace = new NetSalaryCalculator();
        return this.instace;
    }

    public calculateMonthlyAmount(annualSalary: number): number {
        return Number((annualSalary / 12).toFixed(2));
    }
}
