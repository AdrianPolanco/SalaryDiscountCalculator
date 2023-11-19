import { Context, createContext, useState } from "react";
import IChildren from "../interfaces/IChildren";
import IViewContext from "../interfaces/IViewContext";
import IData from "../interfaces/IData";

const data: IData = {
    show: false,
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
};
const ViewTableContext = createContext<IViewContext>([data, () => {}]);
const ViewTableProvider = ({ children }: IChildren) => {
    //const [state, dispatch] = useReducer(formReducer, formData);
    const [show, setShow] = useState(data);
    /* const [grossdata, setGrossData] = useState({})
    const [netdata, setNetData] = useState({}); */
    //ViewTableContext = createContext<IViewContext>([show, setShow]);
    return (
        <ViewTableContext.Provider value={[show, setShow]}>
            {children}
        </ViewTableContext.Provider>
    );
};

export { ViewTableProvider, ViewTableContext };
