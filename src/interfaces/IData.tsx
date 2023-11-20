import IGrossResults from "./IGrossResults";
import INetResults from "./INetResults";
import IVacation from "./IVacations";

export default interface IData {
    grossResults: IGrossResults;
    netResults: INetResults;
    vacations: IVacation;
}
