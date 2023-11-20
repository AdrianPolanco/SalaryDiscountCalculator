import IFormData from "../interfaces/IFormData";
import ExperienceWarehouse from "./ExperienceWarehouse";
import IExperiences from "../interfaces/IExperience";
import INetResults from "../interfaces/INetResults";
import IVacation from "../interfaces/IVacations";

export default class VacationsCalculator {
    private static instance: VacationsCalculator;
    private constructor(private experienceWarehouse: ExperienceWarehouse) {}

    calculateAmount(
        data: IFormData,
        { dailyNetSalary }: INetResults
    ): IVacation {
        const { fromDate, untilDate } = data;
        const firstData: Date = new Date(fromDate);
        const secondData: Date = new Date(untilDate);
        const workingYears = this.calculateTime(firstData, secondData);
        const vacations: IExperiences =
            this.experienceWarehouse.getExperienceLevel(workingYears);
        const vacationsPayment: number =
            vacations.calculateAmount(dailyNetSalary);
        return { years: workingYears, amount: vacationsPayment };
    }
    private calculateTime(firstDate: Date, secondDate: Date): number {
        const miliSecondsPerYear = 31536000000;
        const differenceBetweenMiliSeconds = Math.abs(
            firstDate.getTime() - secondDate.getTime()
        );
        const differenceYear =
            differenceBetweenMiliSeconds / miliSecondsPerYear;
        return Math.floor(differenceYear);
    }
    public static GetInstance(experienceWarehouse: ExperienceWarehouse) {
        if (!VacationsCalculator.instance) {
            VacationsCalculator.instance = new VacationsCalculator(
                experienceWarehouse
            );
        }

        return VacationsCalculator.instance;
    }
}
