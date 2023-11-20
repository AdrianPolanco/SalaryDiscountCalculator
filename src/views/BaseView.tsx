import Header from "../components/Header";
import MainForm from "../components/MainForm";
import MobileTable from "../components/MobileTable";
import { ChakraProvider } from "@chakra-ui/react";

import BaseFormProvider from "../providers/ContextProvider";
import { ViewTableProvider } from "../providers/TableProvider";
import DesktopTable from "../components/DesktopTable";
//By the moment, this is the only view the app has
const BaseView = (): JSX.Element => {
    return (
        <div>
            <Header>
                <BaseFormProvider>
                    <ViewTableProvider>
                        <MainForm></MainForm>
                        <ChakraProvider>
                            <MobileTable></MobileTable>
                            <DesktopTable></DesktopTable>
                        </ChakraProvider>
                    </ViewTableProvider>
                </BaseFormProvider>
            </Header>
        </div>
    );
};

export default BaseView;
