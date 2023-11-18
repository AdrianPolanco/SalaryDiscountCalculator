import Header from "../components/Header";
import MainForm from "../components/MainForm";
import BaseFormDataContext from "../providers/ContextProvider";
import MobileTable from "../components/MobileTable";
import { ChakraProvider } from "@chakra-ui/react";
const BaseView = (): JSX.Element => {
    return (
        <div>
            <Header>
                <BaseFormDataContext>
                    <MainForm></MainForm>
                    <ChakraProvider>
                        <MobileTable></MobileTable>
                    </ChakraProvider>
                </BaseFormDataContext>
            </Header>
        </div>
    );
};

export default BaseView;
