import Header from "../components/Header";
import MainForm from "../components/MainForm";
import BaseFormDataContext from "../providers/ContextProvider";
import MobileTable from "../components/MobileTable";
import { ChakraProvider } from "@chakra-ui/react";
import ViewTableDataContext, {
    ViewTableContext,
} from "../providers/TableProvider";
import { useContext } from "react";
const BaseView = (): JSX.Element => {
    return (
        <div>
            <Header>
                <BaseFormDataContext>
                    <ViewTableDataContext>
                        <MainForm></MainForm>
                        <ChakraProvider>
                            {<MobileTable></MobileTable>}
                        </ChakraProvider>
                    </ViewTableDataContext>
                </BaseFormDataContext>
            </Header>
        </div>
    );
};

export default BaseView;
