import IFormData from "../interfaces/IFormData";
import ExperienceWarehouse from "./ExperienceWarehouse";
import IExperiences from "../interfaces/IExperience";
import INetResults from "../interfaces/INetResults";
import IVacation from "../interfaces/IVacations";

export default class VacationsCalculator {
    private static instance: VacationsCalculator;
    //Making the constructor private so we only can get an instance from the GetInstance method
    private constructor(private experienceWarehouse: ExperienceWarehouse) {}

    //Calculating amount by receiving the form data and the daily net salary
    calculateAmount(
        data: IFormData,
        { dailyNetSalary }: INetResults
    ): IVacation {
        const { fromDate, untilDate } = data;
        const firstData: Date = new Date(fromDate);
        const secondData: Date = new Date(untilDate);
        //Getting years of work
        const workingYears = this.calculateTime(firstData, secondData);
        //Getting experience level passing the years that we have gotten
        const vacations: IExperiences =
            this.experienceWarehouse.getExperienceLevel(workingYears);
        //Calculating vacations with the experience-related class we have got in the prior operation
        const vacationsPayment: number =
            vacations.calculateAmount(dailyNetSalary);
        //Returning vacations-related data
        return { years: workingYears, amount: vacationsPayment };
    }

    //Calculating working years
    private calculateTime(firstDate: Date, secondDate: Date): number {
        //A year has this quantity of miliseconds
        const miliSecondsPerYear = 31536000000;

        //Getting the absolute value from the substraction of each date from 1970 in miliseconds
        const differenceBetweenMiliSeconds = Math.abs(
            firstDate.getTime() - secondDate.getTime()
        );

        //Dividing the difference between years between one year in a miliseconds format, so we can get 1,2,3, and so on format
        const differenceYear =
            differenceBetweenMiliSeconds / miliSecondsPerYear;

        //Rounding to below, if we have 4.95, it will return 4
        return Math.floor(differenceYear);
    }

    //Returns an instance from this class, so that there can only be a single instance of the class
    public static GetInstance(experienceWarehouse: ExperienceWarehouse) {
        if (!VacationsCalculator.instance) {
            VacationsCalculator.instance = new VacationsCalculator(
                experienceWarehouse
            );
        }

        return VacationsCalculator.instance;
    }
}
