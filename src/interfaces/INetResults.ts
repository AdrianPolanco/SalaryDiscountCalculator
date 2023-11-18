import ITaxes from "./ITaxes";

export default interface INetResults {
    annualNetSalary: number;
    monthlyNetSalary: number;
    dailyNetSalary: number;
    monthlyWithHolding: number;
    annualWithHolding: number;
    taxes: ITaxes;
}
