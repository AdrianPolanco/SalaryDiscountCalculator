import { Context, createContext, useState } from "react";
import IChildren from "../interfaces/IChildren";
import { IView } from "../interfaces/IView";

let ViewTableContext: Context<IView>;

const ViewTableDataContext = ({ children }: IChildren) => {
    const [view, setView] = useState<boolean>(false);
    ViewTableContext = createContext([view, setView]);
    return (
        <ViewTableContext.Provider value={[view, setView]}>
            {children}
        </ViewTableContext.Provider>
    );
};

export { ViewTableContext };
export default ViewTableDataContext;
