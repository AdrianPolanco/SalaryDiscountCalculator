import { DispatchWithoutAction } from "react";
import IFormData from "./IFormData";

export type IReducer = [state: IFormData, dispatch: DispatchWithoutAction];
