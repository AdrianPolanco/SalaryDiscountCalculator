import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

const MobileTable = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-10">
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
                                <Td>RD${150000}</Td>
                            </Tr>
                            <Tr>
                                <Td>Monthly gross salary</Td>
                                <Td>RD${15000}</Td>
                            </Tr>
                            <Tr>
                                <Td>Daily salary</Td>
                                <Td>RD${150}</Td>
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
                                <Td>RD${120000}</Td>
                            </Tr>
                            <Tr>
                                <Td>Monthly</Td>
                                <Td>RD${12000}</Td>
                            </Tr>
                            <Tr>
                                <Td>Daily</Td>
                                <Td>RD${12000}</Td>
                            </Tr>
                            <Tr>
                                <Td>Monthly Witholding</Td>
                                <Td>RD${12000}</Td>
                            </Tr>
                            <Tr>
                                <Td>Annual Witholding</Td>
                                <Td>RD${12000}</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};
/*         annualNetSalary,
            monthlyNetSalary,
            dailyNetSalary,
            monthlyWithHolding,
            annualWithHolding, */

export default MobileTable;
