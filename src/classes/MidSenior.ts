import IExperiences from "../interfaces/IExperience";

export default class MidSenior implements IExperiences {
    private static instance: MidSenior;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {}
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): MidSenior {
        if (!MidSenior.instance) MidSenior.instance = new MidSenior();
        return MidSenior.instance;
    }
    //Calculating vacations according to the rules settled by DGII
    public calculateAmount(dailyNetSalary: number): number {
        const vacationsAmount = dailyNetSalary * 14;
        return Number(vacationsAmount.toFixed(2));
    }
}
