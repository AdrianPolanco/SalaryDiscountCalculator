import { Context, createContext, useState } from "react";
import IFormData from "../interfaces/IFormData";
import { IReducer } from "../interfaces/IReducer";
import IChildren from "../interfaces/IChildren";

//Defining the data will be send from the form
const formData: IFormData = {
    grossMonthlySalary: 0,
    fromDate: "",
    untilDate: "",
};

let BaseViewContext: Context<IReducer>;

//Creating provider
const BaseFormProvider = ({ children }: IChildren) => {
    const [values, setValues] = useState(formData);
    BaseViewContext = createContext<IReducer>([values, setValues]);
    return (
        <BaseViewContext.Provider value={[values, setValues]}>
            {children}
        </BaseViewContext.Provider>
    );
};

export { BaseViewContext };
export default BaseFormProvider;
