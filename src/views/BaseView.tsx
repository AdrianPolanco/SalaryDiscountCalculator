import Header from "../components/Header";
import MainForm from "../components/MainForm";
import MobileTable from "../components/MobileTable";
import { ChakraProvider } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import BaseFormProvider from "../providers/ContextProvider";
import {
    ViewTableProvider,
    ViewTableContext,
} from "../providers/TableProvider";
const BaseView = (): JSX.Element => {
    const [data] = useContext(ViewTableContext);

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
