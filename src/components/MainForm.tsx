import {
    Button,
    FormControl,
    FormLabel,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from "@chakra-ui/react";
import {
    ChangeEvent,
    FormEvent,
    MouseEventHandler,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { BaseViewContext } from "../providers/ContextProvider";
import IFormData from "../interfaces/IFormData";

const MainForm = (): JSX.Element => {
    const [values, setValues] = useContext(BaseViewContext);
    const [loading, setLoading] = useState<boolean>(false);
    const currentDate: Date = new Date();
    const formRef = useRef(null);
    useEffect(() => {
        console.log("mounted");
    }, []);

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        const formData: FormData = new FormData(formRef.current!);
        //const formDataObject = Object.fromEntries([...formData.entries()]);
        /* setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                        }, 2000); */

        console.log(formData);
    };

    return (
        <FormControl className="flex flex-col p-5 gap-12" ref={formRef}>
            <div className="flex flex-col justify-center">
                <FormLabel>Gross Monthly Salary: </FormLabel>
                <NumberInput
                    min={0}
                    placeholder="Your monthly salary in DOP"
                    name="grossMonthlySalary"
                >
                    <NumberInputField className="border border-green-200 rounded" />
                </NumberInput>
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="flex gap-10">
                    <FormLabel>From: </FormLabel>
                    <Input
                        type="date"
                        className="border border-green-200 rounded p-2"
                        min="1992-01-01"
                        max={`${new Date().getFullYear()}-12-31`}
                        name="fromDate"
                    />
                </div>
                <div className="flex gap-10">
                    <FormLabel>Until: </FormLabel>
                    <Input
                        type="date"
                        className="border border-green-200 rounded p-2"
                        min="1992-01-01"
                        max={`${currentDate.getFullYear()}-12-31`}
                        name="untilDate"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <Button
                    isLoading={loading}
                    loadingText="Calculating..."
                    className="border border-solid bg-green-300 w-36 text-white rounded-xl p-1 hover:text-green-300 hover:bg-white hover:border-green-300 transform scale-100 active:scale-95 transition duration-200"
                    variant="outline"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Calculate
                </Button>
            </div>
        </FormControl>
    );
};

export default MainForm;
