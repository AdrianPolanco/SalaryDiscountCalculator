import IGrossResults from "./IGrossResults";
import INetResults from "./INetResults";

export default interface IData {
    show: boolean;
    grossResults: IGrossResults;
    netResults: INetResults;
}
