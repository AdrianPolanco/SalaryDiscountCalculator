import Header from "../components/Header";
import MainForm from "../components/MainForm";
import MobileTable from "../components/MobileTable";
import { ChakraProvider } from "@chakra-ui/react";

import BaseFormProvider from "../providers/ContextProvider";
import { ViewTableProvider } from "../providers/TableProvider";
const BaseView = (): JSX.Element => {
    return (
        <div>
            <Header>
                <BaseFormProvider>
                    <ViewTableProvider>
                        <MainForm></MainForm>
                        <ChakraProvider>
                            <MobileTable></MobileTable>
                        </ChakraProvider>
                    </ViewTableProvider>
                </BaseFormProvider>
            </Header>
        </div>
    );
};

export default BaseView;
