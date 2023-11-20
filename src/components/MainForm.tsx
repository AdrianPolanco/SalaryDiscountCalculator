import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { BaseViewContext } from "../providers/ContextProvider";
import { Formik, Field, FormikErrors } from "formik";
import { ViewTableContext } from "../providers/TableProvider";
import GrossSalaryCalculator from "../classes/GrossSalaryCalculator";
import TaxCalculatorRouter from "../classes/TaxCalculatorRouter";
import TaxesCalculator from "../classes/TaxesCalculator";
import INetResults from "../interfaces/INetResults";
import NetSalaryCalculator from "../classes/NetSalaryCalculator";
import IFormData from "../interfaces/IFormData";
import IData from "../interfaces/IData";
import VacationsCalculator from "../classes/VacationsCalculator";
import ExperienceWarehouse from "../classes/ExperienceWarehouse";
import ChristmasCalculator from "../classes/ChristmasCalculator";
import IChristmas from "../interfaces/IChristmas";

const MainForm = (): JSX.Element => {
    const [formValues, setFormValues] = useContext(BaseViewContext);
    const [, setShowTable] = useContext(ViewTableContext);
    const [loading, setLoading] = useState<boolean>(false);
    const currentDate: Date = new Date();
    const formRef = useRef(null);
    const grossSalaryCalculator: GrossSalaryCalculator =
        GrossSalaryCalculator.GetInstance();
    useEffect(() => {
        if (formValues) {
            setLoading(true);

            const grossResults =
                grossSalaryCalculator.getGrossSalaryData(formValues);
            const taxCalculatorRouter: TaxCalculatorRouter =
                TaxCalculatorRouter.GetInstance();
            const taxCalulator: TaxesCalculator =
                taxCalculatorRouter.GetTaxCalculator(
                    grossResults.annualGrossSalary
                );
            const netSalaryCalculator: NetSalaryCalculator =
                NetSalaryCalculator.GetInstance();
            const netData: INetResults = netSalaryCalculator.getNetSalaryData(
                taxCalulator,
                grossResults
            );
            const wareHouse: ExperienceWarehouse =
                ExperienceWarehouse.GetInstance();
            const vacationsCalculator: VacationsCalculator =
                VacationsCalculator.GetInstance(wareHouse);
            const vacations = vacationsCalculator.calculateAmount(
                formValues,
                netData
            );
            const christmasCalculator: ChristmasCalculator =
                ChristmasCalculator.GetInstance();
            const christmas: IChristmas = christmasCalculator.calculateAmount(
                formValues,
                netData
            );
            setShowTable((prevState) => ({
                ...prevState,
                netResults: netData,
                grossResults,
                vacations,
                christmas,
            }));

            setLoading(false);
        }
    }, [formValues]);
    const handleSubmits = (values: IFormData) => {
        setLoading(true);
        setFormValues(values);
        setLoading(false);
        /* const grossResults = grossSalaryCalculator.getGrossSalaryData(values);
        const taxCalculatorRouter: TaxCalculatorRouter =
            TaxCalculatorRouter.GetInstance();
        const taxCalulator: TaxesCalculator =
            taxCalculatorRouter.GetTaxCalculator(
                grossResults.annualGrossSalary
            );
        const netSalaryCalculator: NetSalaryCalculator =
            NetSalaryCalculator.GetInstance();
        const netData: INetResults = netSalaryCalculator.getNetSalaryData(
            taxCalulator,
            grossResults
        );
        setShowTable({
            netResults: netData,
            grossResults: grossSalaryCalculator.getGrossSalaryData(values),
        });

        */
    };
    return (
        <Formik
            initialValues={formValues}
            validateOnChange
            onSubmit={(values, { setErrors }) => {
                // Getting values from the date inputs
                const fromDate = values.fromDate;
                const untilDate = values.untilDate;

                if (fromDate > untilDate) {
                    // Setting errors
                    setErrors({
                        fromDate:
                            "The starting date must be before than the ending date",
                        untilDate:
                            "The ending date must be after the starting date",
                    });
                    return;
                }

                handleSubmits(values);
            }}
        >
            {({ handleSubmit, errors, touched }) => (
                <form
                    className="flex flex-col gap-8 p-10"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <FormControl className="flex flex-col p-5">
                        <FormLabel htmlFor="grossMonthlySalary">
                            Gross Monthly Salary:
                        </FormLabel>
                        <Field
                            as={Input}
                            id="grossMonthlySalary"
                            name="grossMonthlySalary"
                            defaultValue=""
                            placeholder="Your monthly salary in DOP"
                            className="border border-green-200 rounded p-2"
                            type="text"
                        />
                    </FormControl>

                    <div className="flex gap-10 justify-center">
                        <div className="flex flex-col">
                            <FormControl
                                isInvalid={
                                    !!errors.fromDate && touched.fromDate
                                }
                            >
                                <FormLabel htmlFor="fromDate">From: </FormLabel>
                                <Field
                                    as={Input}
                                    type="date"
                                    className="border border-green-200 rounded p-2"
                                    min="1992-01-01"
                                    max={`${new Date().getFullYear()}-12-31`}
                                    name="fromDate"
                                    id="fromDate"
                                    variant="filled"
                                    validate={(value: string) => {
                                        let error;

                                        if (value == "") {
                                            error = "This field is required";
                                        }

                                        return error;
                                    }}
                                />
                                <FormErrorMessage className="text-red-600">
                                    {errors.fromDate}
                                </FormErrorMessage>
                            </FormControl>
                        </div>
                        <div className="flex flex-col">
                            <FormControl
                                isInvalid={
                                    !!errors.untilDate && touched.untilDate
                                }
                            >
                                <FormLabel htmlFor="untilDate">
                                    Until:{" "}
                                </FormLabel>
                                <Field
                                    as={Input}
                                    type="date"
                                    className="border border-green-200 rounded p-2"
                                    min="1992-01-01"
                                    max={`${currentDate.getFullYear()}-12-31`}
                                    name="untilDate"
                                    id="untilDate"
                                    variant="filled"
                                    validate={(value: string) => {
                                        let error;

                                        if (value == "") {
                                            error = "This field is required";
                                        }

                                        return error;
                                    }}
                                />
                                <FormErrorMessage className="text-red-600">
                                    {errors.untilDate}
                                </FormErrorMessage>
                            </FormControl>
                        </div>
                    </div>

                    <div className="flex justify-center mb-10">
                        <Button
                            isLoading={loading}
                            loadingText="Calculating..."
                            className="border border-solid bg-green-300 w-36 text-white rounded-xl p-1 hover:text-green-300 hover:bg-white hover:border-green-300 transform scale-100 active:scale-95 transition duration-200"
                            variant="outline"
                            type="submit"
                        >
                            Calculate
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default MainForm;
