import IExperience from "../interfaces/IExperience";
import IExperienceWarehouse from "../interfaces/IExperienceWarehouse";
import Junior from "./Junior";
import MidSenior from "./MidSenior";
import Senior from "./Senior";

export default class ExperienceWarehouse implements IExperienceWarehouse {
    private static instance: ExperienceWarehouse;
    private constructor() {}

    private experienceCategories = {
        junior: Junior.GetInstance(),
        midSenior: MidSenior.GetInstance(),
        senior: Senior.GetInstance(),
    };
    public getExperienceLevel(years: number): IExperience {
        if (years < 1) {
            return this.experienceCategories.junior;
        } else if (years >= 1 && years <= 5) {
            return this.experienceCategories.midSenior;
        } else {
            return this.experienceCategories.senior;
        }
    }
    public static GetInstance() {
        if (!ExperienceWarehouse.instance) {
            ExperienceWarehouse.instance = new ExperienceWarehouse();
        }

        return ExperienceWarehouse.instance;
    }
}
