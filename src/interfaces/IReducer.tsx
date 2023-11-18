import IAction from "./IAction";
import IFormData from "./IFormData";

export type IReducer = [state: IFormData, dispatch: React.Dispatch<IAction>];
