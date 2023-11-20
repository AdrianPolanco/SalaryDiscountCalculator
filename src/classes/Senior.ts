import IExperiences from "../interfaces/IExperience";

export default class Senior implements IExperiences {
    private static instance: Senior;
    private constructor() {}

    public static GetInstance(): Senior {
        if (!Senior.instance) Senior.instance = new Senior();
        return Senior.instance;
    }
    public calculateAmount(dailyNetSalary: number): number {
        const vacationsAmount = dailyNetSalary * 18;
        return Number(vacationsAmount.toFixed(2));
    }
}
