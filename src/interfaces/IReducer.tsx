import { SetStateAction } from "react";
import IFormData from "./IFormData";

export type IReducer = [
    state: IFormData,
    dispatch: React.Dispatch<SetStateAction<IFormData>>
];
