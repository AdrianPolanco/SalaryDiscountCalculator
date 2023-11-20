import IChildren from "../interfaces/IChildren";
import MoneyIcon from "./MoneyIcon";
import HamburguerMenu from "./HamburguerMenu";

const Header = ({ children }: IChildren): JSX.Element => {
    return (
        <div className="">
            <header className="flex p-5 justify-between bg-slate-50">
                <div>
                    <MoneyIcon height={50} width={50} />
                </div>
                {/* <div className="flex items-center">
                    <HamburguerMenu />
                </div> */}

                {/*<div className="flex gap">
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
    </div>*/}
            </header>
            {children}
        </div>
    );
};

export default Header;
