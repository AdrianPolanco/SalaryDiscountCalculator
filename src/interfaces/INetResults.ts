import ITaxes from "./ITaxes";

export default interface INetResults {
    anualNetSalary: number;
    monthlyNetSalary: number;
    dailyNetSalary: number;
    monthlyWithHolding: number;
    annualWithHolding: number;
    taxes: ITaxes;
}
