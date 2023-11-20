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
import { useContext, useEffect } from "react";

const MobileTable = (): JSX.Element => {
    const [data] = useContext(ViewTableContext);
    //useEffect(() => {}, [data]);
    const { grossResults, netResults, vacations } = data;
    const { annualGrossSalary, monthlyGrossSalary, dailySalary } = grossResults;
    const {
        annualNetSalary,
        monthlyNetSalary,
        dailyNetSalary,
        monthlyWithHolding,
        annualWithHolding,
    } = netResults;
    const { years, amount } = vacations;
    return (
        <div className="flex flex-col gap-10 p-1">
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>
                            Data about your gross salary
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Concept</Th>
                                <Th>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Annual gross salary</Td>
                                <Td>RD${annualGrossSalary}</Td>
                            </Tr>
                            <Tr>
                                <Td>Monthly gross salary</Td>
                                <Td>RD${monthlyGrossSalary}</Td>
                            </Tr>
                            <Tr>
                                <Td>Daily salary</Td>
                                <Td>RD${dailySalary}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>Data about your net salary</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Net Salary Data</Th>
                                <Th>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Annual</Td>
                                <Td>RD${annualNetSalary}</Td>
                            </Tr>
                            <Tr>
                                <Td>Monthly</Td>
                                <Td>RD${monthlyNetSalary}</Td>
                            </Tr>
                            <Tr>
                                <Td>Daily</Td>
                                <Td>RD${dailyNetSalary}</Td>
                            </Tr>
                            <Tr>
                                <Td>Monthly Witholding</Td>
                                <Td>RD${monthlyWithHolding}</Td>
                            </Tr>
                            <Tr>
                                <Td>Annual Witholding</Td>
                                <Td>RD${annualWithHolding}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className="border border-solid border-green-200">
                <TableContainer className="w-full text-sm">
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>Data about your vacations</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Vacations Data</Th>
                                <Th>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Years</Td>
                                <Td>{years}</Td>
                            </Tr>
                            <Tr>
                                <Td>Amount</Td>
                                <Td>RD${amount}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default MobileTable;
