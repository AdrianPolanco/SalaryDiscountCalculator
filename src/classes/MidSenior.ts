import IExperiences from "../interfaces/IExperience";
import INetResults from "../interfaces/INetResults";

export default class MidSenior implements IExperiences {
    private static instance: MidSenior;
    private constructor() {}

    public static GetInstance(): MidSenior {
        if (!MidSenior.instance) MidSenior.instance = new MidSenior();
        return MidSenior.instance;
    }
    public calculateAmount(dailyNetSalary: number): number {
        const vacationsAmount = dailyNetSalary * 14;
        return Number(vacationsAmount.toFixed(2));
    }
}
