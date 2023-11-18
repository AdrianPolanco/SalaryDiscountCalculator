import IGrossResults from "./IGrossResults";
import INetResults from "./INetResults";

export default interface ITableConfig {
    tableCaption: string;
    data: IGrossResults | INetResults;
}
