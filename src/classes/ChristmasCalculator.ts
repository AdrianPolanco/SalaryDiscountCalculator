import IChristmas from "../interfaces/IChristmas";
import IFormData from "../interfaces/IFormData";
import INetResults from "../interfaces/INetResults";

export default class ChristmasCalculator {
    private static instance: ChristmasCalculator;
    private constructor() {}

    public calculateAmount(
        { untilDate }: IFormData,
        { monthlyNetSalary }: INetResults
    ): IChristmas {
        const currentDate: Date = new Date(untilDate);
        const currentMonth = this.calculateTime(currentDate);
        const amount = Number(
            ((monthlyNetSalary * currentMonth) / 12).toFixed(2)
        );
        return {
            workingMonthsInThisYear: currentMonth,
            amount,
        };
    }
    private calculateTime(currentDate: Date): number {
        const currentMonth: number = currentDate.getMonth();
        return currentMonth + 1;
    }
    public static GetInstance() {
        if (!ChristmasCalculator.instance) {
            ChristmasCalculator.instance = new ChristmasCalculator();
        }

        return ChristmasCalculator.instance;
    }
}
