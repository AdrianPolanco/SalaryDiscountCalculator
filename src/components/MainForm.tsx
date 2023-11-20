import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { BaseViewContext } from "../providers/ContextProvider";
import { Formik, Field } from "formik";
import { ViewTableContext } from "../providers/TableProvider";
import GrossSalaryCalculator from "../classes/GrossSalaryCalculator";
import TaxCalculatorRouter from "../classes/TaxCalculatorRouter";
import TaxesCalculator from "../classes/TaxesCalculator";
import INetResults from "../interfaces/INetResults";
import NetSalaryCalculator from "../classes/NetSalaryCalculator";
import IFormData from "../interfaces/IFormData";
import VacationsCalculator from "../classes/VacationsCalculator";
import ExperienceWarehouse from "../classes/ExperienceWarehouse";
import ChristmasCalculator from "../classes/ChristmasCalculator";
import IChristmas from "../interfaces/IChristmas";

const MainForm = (): JSX.Element => {
    //Using base view context
    const [formValues, setFormValues] = useContext(BaseViewContext);
    //Using Table Context
    const [, setShowTable] = useContext(ViewTableContext);
    //Using state to begin and stop the loading animation
    const [loading, setLoading] = useState<boolean>(false);
    //Getting a date instance in order to show it in the UI
    const currentDate: Date = new Date();
    const formRef = useRef(null);
    //Getting a grossSalaryCalculator instance
    const grossSalaryCalculator: GrossSalaryCalculator =
        GrossSalaryCalculator.GetInstance();
    //Using effect to observe the changes in the formValues state
    useEffect(() => {
        /*Setting the loading to true in order to begin the button animation and not show the animation when refresh the page*/
        if (formValues.fromDate !== "") {
            setLoading(true);
        }

        if (formValues) {
            /*SetTimeout used here with just showing animation purposes, I know perfectly that this must not be done in 
            a real world project unless I have to fetch data from an external source*/
            setTimeout(() => {
                //Getting the gross-related amounts with the getGrossSalaryData method, that receives the data typed in the form
                const grossResults =
                    grossSalaryCalculator.getGrossSalaryData(formValues);
                //Getting a TaxCalculatorRouter instance
                const taxCalculatorRouter: TaxCalculatorRouter =
                    TaxCalculatorRouter.GetInstance();
                /*Getting the tax-calculator class from the GetTaxCalculator method, this method will return a tax-calculator class
                according to the annual gross salary calculated previously
                */
                const taxCalulator: TaxesCalculator =
                    taxCalculatorRouter.GetTaxCalculator(
                        grossResults.annualGrossSalary
                    );
                //Getting a net salary calculator instance
                const netSalaryCalculator: NetSalaryCalculator =
                    NetSalaryCalculator.GetInstance();
                /* Calculating the net salary with the getNetSalaryData, it will receive the tax-calculator instance that was 
                gotten previously, and the results from the grossSalary class calculations */
                const netData: INetResults =
                    netSalaryCalculator.getNetSalaryData(
                        taxCalulator,
                        grossResults
                    );
                //Getting a ExperienceWarehouse instance
                const wareHouse: ExperienceWarehouse =
                    ExperienceWarehouse.GetInstance();
                //Getting a vacations-calculator instance, with the wareHouse class as dependency
                const vacationsCalculator: VacationsCalculator =
                    VacationsCalculator.GetInstance(wareHouse);
                /*Getting the vacations amount with the method calculateAmount, it receives the form data and the net data
                 calculated previously, in the background it will get the experience level with a method of the wareHouse class,
                 that was the reason why we passed it as parameter 
                */
                const vacations = vacationsCalculator.calculateAmount(
                    formValues,
                    netData
                );
                //Getting an instance from the ChristmasCalculator class
                const christmasCalculator: ChristmasCalculator =
                    ChristmasCalculator.GetInstance();
                //Calculating the christmas salary
                const christmas: IChristmas =
                    christmasCalculator.calculateAmount(formValues, netData);
                //Updating the state in order to reflect the changes in the table
                setShowTable((prevState) => ({
                    ...prevState,
                    netResults: netData,
                    grossResults,
                    vacations,
                    christmas,
                }));
                //Setting the loading to false in order to stop the button animation
                setLoading(false);
            }, 1000);
        }
    }, [formValues]);
    const handleSubmits = (values: IFormData) => {
        //Changing the state of the form values when submit the form, this will trigger the code inside useEffect
        setFormValues(values);
    };
    return (
        <Formik
            initialValues={formValues}
            validateOnChange
            onSubmit={(values, { setErrors }) => {
                // Getting values from the date inputs
                const fromDate = values.fromDate;
                const untilDate = values.untilDate;

                //Validating if the from date input as a later date than the until date input
                if (fromDate >= untilDate) {
                    // Setting errors if the condition is true
                    setErrors({
                        fromDate:
                            "The starting date must be before than the ending date",
                        untilDate:
                            "The ending date must be after the starting date",
                    });
                    //Ending the function if so
                    return;
                }

                //Calling handle submits function if the validation was passed
                handleSubmits(values);
            }}
        >
            {({ handleSubmit, errors, touched }) => (
                <form
                    className="flex flex-col gap-8 p-10"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <FormControl className="flex flex-col p-5 justify-center items-center sm:flex-row sm:gap-5 ">
                        <FormLabel htmlFor="grossMonthlySalary">
                            Gross Monthly Salary:
                        </FormLabel>
                        <Field
                            as={Input}
                            id="grossMonthlySalary"
                            name="grossMonthlySalary"
                            defaultValue=""
                            placeholder="Your monthly salary in DOP"
                            className="border border-green-200 rounded p-2 sm:w-1/2 md:w-1/4"
                            type="text"
                        />
                    </FormControl>
                    <FormErrorMessage className="text-red-600">
                        {errors.grossMonthlySalary}
                    </FormErrorMessage>
                    <div className="flex gap-10 justify-center">
                        <div>
                            <FormControl
                                isInvalid={
                                    !!errors.fromDate && touched.fromDate
                                }
                                className="flex flex-col sm:flex-row sm:gap-2"
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
                                className="flex flex-col sm:flex-row sm:gap-2"
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
                            className="border border-solid bg-green-300 w-36 text-white rounded-xl p-1 hover:text-green-300 hover:bg-white hover:border-green-300 transform scale-100 active:scale-95 transition duration-200 md:p-3"
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
