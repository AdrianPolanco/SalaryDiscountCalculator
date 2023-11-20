/* eslint-disable @typescript-eslint/no-unused-vars */
import IExperiences from "../interfaces/IExperience";

export default class Junior implements IExperiences {
    private static instance: Junior;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {}
    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(): Junior {
        if (!Junior.instance) Junior.instance = new Junior();
        return Junior.instance;
    }

    //Calculating vacations according to the rules settled by DGII, which is the vacations salary only applies if you have one year or more working in the company

    public calculateAmount(_dailyNetSalary: number): number {
        return 0;
    }
}
