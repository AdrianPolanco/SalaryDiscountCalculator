import Header from "../components/Header";
import MainForm from "../components/MainForm";
const BaseView = (): JSX.Element => {
    return (
        <div>
            <Header>
                <MainForm></MainForm>
            </Header>
        </div>
    );
};

export default BaseView;
