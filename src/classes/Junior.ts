import IExperiences from "../interfaces/IExperience";
import INetResults from "../interfaces/INetResults";

export default class Junior implements IExperiences {
    private static instance: Junior;
    private constructor() {}

    public static GetInstance(): Junior {
        if (!Junior.instance) Junior.instance = new Junior();
        return Junior.instance;
    }
    public calculateAmount(dailyNetSalary: number): number {
        return 0;
    }
}
