import { createContext, useState } from "react";
import IChildren from "../interfaces/IChildren";
import IViewContext from "../interfaces/IViewContext";
import IData from "../interfaces/IData";

//Defining the data that will be use as context and that will be displayed in the table
const data: IData = {
    grossResults: {
        annualGrossSalary: 0,
        monthlyGrossSalary: 0,
        dailySalary: 0,
    },
    netResults: {
        annualNetSalary: 0,
        monthlyNetSalary: 0,
        dailyNetSalary: 0,
        monthlyWithHolding: 0,
        annualWithHolding: 0,
    },
    vacations: {
        years: 0,
        amount: 0,
    },
    christmas: {
        workingMonthsInThisYear: 0,
        amount: 0,
    },
};
//Creating context
const ViewTableContext = createContext<IViewContext>([data, () => {}]);
//Creating provider
const ViewTableProvider = ({ children }: IChildren) => {
    const [show, setShow] = useState(data);

    return (
        <ViewTableContext.Provider value={[show, setShow]}>
            {children}
        </ViewTableContext.Provider>
    );
};

export { ViewTableProvider, ViewTableContext };
