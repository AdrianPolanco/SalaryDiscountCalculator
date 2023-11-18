import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BaseViewContext } from "../providers/ContextProvider";

const MainForm = (): JSX.Element => {
    const [state, dispatch] = useContext(BaseViewContext);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <FormControl className="flex flex-col p-5 gap-12" key={"FormKey"}>
            <div className="flex flex-col justify-center">
                <FormLabel>Gross Salary: </FormLabel>
                <Input
                    type="numeric"
                    pattern="[0-9]*"
                    min={0}
                    className="border border-green-200 rounded"
                    placeholder="Your monthly salary in DOP"
                    value={state.rawMonthlySalary}
                />
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="flex gap-10">
                    <FormLabel>From: </FormLabel>
                    <Input
                        type="date"
                        className="border border-green-200 rounded p-2"
                        min="1992-01-01"
                        max={`${new Date().getFullYear()}-12-31`}
                    />
                </div>
                <div className="flex gap-10">
                    <FormLabel>Until: </FormLabel>
                    <Input
                        type="date"
                        className="border border-green-200 rounded p-2"
                        min="1992-01-01"
                        max={`${new Date().getFullYear()}-12-31`}
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                            dispatch({
                                name: "untilDate",
                                value: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <Button
                    isLoading={loading}
                    loadingText="Submitting"
                    className="border border-solid bg-green-300 w-36 text-white rounded-xl p-1 hover:text-green-300 hover:bg-white hover:border-green-300 transform scale-100 active:scale-95 transition duration-200"
                    variant="outline"
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                        }, 2000);
                    }}
                >
                    Calculate
                </Button>
            </div>
        </FormControl>
    );
};

export default MainForm;
