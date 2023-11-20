import IExperience from "../interfaces/IExperience";
import IExperienceWarehouse from "../interfaces/IExperienceWarehouse";
import Junior from "./Junior";
import MidSenior from "./MidSenior";
import Senior from "./Senior";

export default class ExperienceWarehouse implements IExperienceWarehouse {
    private static instance: ExperienceWarehouse;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor() {}

    //Defining a object that have one instance of all the experience-related classes
    private experienceCategories = {
        junior: Junior.GetInstance(),
        midSenior: MidSenior.GetInstance(),
        senior: Senior.GetInstance(),
    };

    //Returns an instance from one of the classes that implements IExperience interfaces, depending of the experience years
    public getExperienceLevel(years: number): IExperience {
        if (years < 1) {
            return this.experienceCategories.junior;
        } else if (years >= 1 && years <= 5) {
            return this.experienceCategories.midSenior;
        } else {
            return this.experienceCategories.senior;
        }
    }

    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance() {
        if (!ExperienceWarehouse.instance) {
            ExperienceWarehouse.instance = new ExperienceWarehouse();
        }

        return ExperienceWarehouse.instance;
    }
}
