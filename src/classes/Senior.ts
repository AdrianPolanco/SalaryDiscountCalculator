import IExperiences from "../interfaces/IExperience";

export default class Senior implements IExperiences {
    private static instance: Senior;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {}
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): Senior {
        if (!Senior.instance) Senior.instance = new Senior();
        return Senior.instance;
    }
    //Calculating taxes vacations to the rules settled by DGII
    public calculateAmount(dailyNetSalary: number): number {
        const vacationsAmount = dailyNetSalary * 18;
        return Number(vacationsAmount.toFixed(2));
    }
}
