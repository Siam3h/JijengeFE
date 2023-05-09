import { ArrowRightIcon, CheckCircleIcon } from '@chakra-ui/icons';
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
    IconButton,
    Text,
    Button,
    Tooltip,
    Flex,
    Image
} from '@chakra-ui/react';

const Dashboard = () => {

    const isProfileCreated = false;
    return (
        <>
            <Box boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)" p="25px" m="15px">
                <Flex justify="space-between" mr="45px" ml="45px" mt="45px" p="25px">
                    <Flex flexDirection="column" gap="10px">
                        <Tooltip
                            label="Create Sacco Profle to be able to trade"
                            placement="top"
                            fontSize="md"
                            bg="orange"
                        >
                            <CheckCircleIcon
                                boxSize={10}
                                color={isProfileCreated ? "green" : "orange"}
                            />
                        </Tooltip>
                        <Text as="bold" fontSize="14px" mt="15px">
                            {isProfileCreated ? "User Verifed" : "Sacco Profile Incomplete"}
                        </Text>
                    </Flex>
                    <Box>
                        <Button
                            bg="#17a589"
                            color="white"
                            _hover={{ bg: "#17a589", color: "white" }}
                        >
                            {isProfileCreated ? "Add New Sacco " : "Create Sacco Profile"}
                        </Button>
                    </Box>
                </Flex>
                {isProfileCreated ? 
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
                                    <Td ><IconButton w='1px' h='10px' borderRadius="50%" >
                                        <Center w='25px' h='25px' p="15px" borderRadius="50%" bg="#17a589" color='white'>
                                            <ArrowRightIcon />
                                        </Center>
                                    </IconButton></Td>
                                </Tr>
                                <Tr>
                                    <Td>Magereza Sacco</Td>
                                    <Td>6575</Td>

                                    <Td>
                                        <IconButton w='1px' h='10px' borderRadius="50%" >
                                            <Center w='25px' h='25px' p="15px" borderRadius="50%" bg="#17a589" color='white'>
                                                <ArrowRightIcon />
                                            </Center>
                                        </IconButton>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Mwalimu Sacco</Td>
                                    <Td>2550</Td>
                                    <Td>
                                        <IconButton w='1px' h='10px' borderRadius="50%" >
                                            <Center w='25px' h='25px' p="15px" borderRadius="50%" bg="#17a589" color='white'>
                                                <ArrowRightIcon />
                                            </Center>
                                        </IconButton>
                                    </Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                : <Flex align="center" justify="center"> <Image  src="../../public/illustrationmoney.png" boxSize="5000px 5000px" /> </Flex>}
            </Box>
        </>
    )
}

export default Dashboard