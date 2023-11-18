import { Context, createContext, useReducer } from "react";
import IFormData from "../interfaces/IFormData";
import { IReducer } from "../interfaces/IReducer";
import IChildren from "../interfaces/IChildren";
import formReducer from "../reducers/formReducer";

const formData: IFormData = {
    rawMonthlySalary: 0,
    fromDate: "",
    untilDate: "",
};

let BaseViewContext: Context<IReducer>;

const BaseFormDataContext = ({ children }: IChildren) => {
    const [state, dispatch] = useReducer(formReducer, formData);

    BaseViewContext = createContext<IReducer>([state, dispatch]);
    return (
        <BaseViewContext.Provider value={[state, dispatch]}>
            {children}
        </BaseViewContext.Provider>
    );
};

export { BaseViewContext };
export default BaseFormDataContext;
