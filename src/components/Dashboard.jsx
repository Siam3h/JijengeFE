import { ArrowRightIcon } from '@chakra-ui/icons';
import {
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
} from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <Box m="50px 250px" boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)">
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Sacco Name</Th>
                            <Th>Shares Volume</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Stima Sacco</Td>
                            <Td>5000</Td>
                            <Td ><Center w='25px' h='25px' p="15px" borderRadius="50%" bg="#17a589" color='white'>
                                <ArrowRightIcon />
                            </Center></Td>
                        </Tr>
                        <Tr>
                            <Td>Magereza Sacco</Td>
                            <Td>6575</Td>
                            <Td><Center w='25px' h='25px' p="15px" borderRadius="50%" bg="#17a589" color='white'>
                                <ArrowRightIcon />
                            </Center></Td>
                        </Tr>
                        <Tr>
                            <Td>Mwalimu Sacco</Td>
                            <Td>2550</Td>
                            <Td>
                                <Center w='25px' h='25px' p="15px" borderRadius="50%" bg="#17a589" color='white'>
                                    <ArrowRightIcon />
                                </Center>
                            </Td>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Dashboard