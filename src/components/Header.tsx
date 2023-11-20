import IChildren from "../interfaces/IChildren";
import MoneyIcon from "./MoneyIcon";

//Writting the header component in order to show the same header when adding more features to the app
const Header = ({ children }: IChildren): JSX.Element => {
    return (
        <div className="">
            <header className="flex p-5 justify-between bg-slate-50">
                <div>
                    <MoneyIcon height={50} width={50} />
                </div>
            </header>
            {children}
        </div>
    );
};

export default Header;
