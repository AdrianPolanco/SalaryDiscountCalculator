import { Context, createContext, useState } from "react";
import IFormData from "../interfaces/IFormData";
import { IReducer } from "../interfaces/IReducer";
import IChildren from "../interfaces/IChildren";

const formData: IFormData = {
    rawMonthlySalary: 0,
    fromDate: "",
    untilDate: "",
};

let BaseViewContext: Context<IReducer>;

const BaseFormDataContext = ({ children }: IChildren) => {
    //const [state, dispatch] = useReducer(formReducer, formData);
    const [values, setValues] = useState(formData);
    BaseViewContext = createContext<IReducer>([values, setValues]);
    return (
        <BaseViewContext.Provider value={[values, setValues]}>
            {children}
        </BaseViewContext.Provider>
    );
};

export { BaseViewContext };
export default BaseFormDataContext;
