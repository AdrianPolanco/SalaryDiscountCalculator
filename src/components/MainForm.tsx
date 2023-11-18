import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const MainForm = (): JSX.Element => {
    return (
        <FormControl className="flex flex-col p-5 gap-5" isRequired>
            <div className="flex flex-col justify-center">
                <FormLabel>Raw Salary: </FormLabel>
                <Input
                    type="number"
                    min={0}
                    className="border border-green-200 rounded"
                    placeholder="Your monthly salary in DOP"
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
                    />
                </div>
            </div>
        </FormControl>
    );
};

export default MainForm;
