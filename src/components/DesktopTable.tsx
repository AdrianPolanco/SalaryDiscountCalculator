import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { ViewTableContext } from "../providers/TableProvider";
import { useContext } from "react";
//Writing the table component that will be shown when the screen width is greater than lg view
const DesktopTable = (): JSX.Element => {
    const [data] = useContext(ViewTableContext);
    //useEffect(() => {}, [data]);
    const { grossResults, netResults, vacations, christmas } = data;
    const { annualGrossSalary, monthlyGrossSalary, dailySalary } = grossResults;
    const {
        annualNetSalary,
        monthlyNetSalary,
        dailyNetSalary,
        monthlyWithHolding,
        annualWithHolding,
    } = netResults;
    const { years, amount } = vacations;
    const { workingMonthsInThisYear } = christmas;
    return (
        <div className="lg:flex lg:flex-col gap-10 p-1 hidden">
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>Your annual data</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Gross Salary</Th>
                                <Th>Net Salary</Th>
                                <Th>Vacations</Th>
                                <Th>Christmas</Th>
                                <Th>Annual withholding</Th>
                            </Tr>
                            <Tr></Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>RD${annualGrossSalary}</Td>
                                <Td>RD${annualNetSalary}</Td>
                                <Td>RD${amount}</Td>
                                <Td>RD$ {christmas.amount || 0}</Td>
                                <Td>RD${annualWithHolding}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>Your monthly data</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Gross Salary</Th>
                                <Th>Net Salary</Th>
                                <Th>Withholding</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>RD${monthlyGrossSalary}</Td>
                                <Td>RD${monthlyNetSalary}</Td>
                                <Td>RD${monthlyWithHolding}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>Your daily data</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Gross Salary</Th>
                                <Th>Net Salary</Th>
                                <Th>Withholding</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>RD${dailySalary}</Td>
                                <Td>RD${dailyNetSalary}</Td>
                                <Td>
                                    RD$
                                    {(dailySalary - dailyNetSalary).toFixed(2)}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>
                            Data about your time working
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Years worked</Th>
                                <Th>Months worked this year</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{years || 0}</Td>{" "}
                                <Td>{workingMonthsInThisYear || 0}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default DesktopTable;
