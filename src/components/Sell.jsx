import {
  Box, Button, Flex, Td,
  Text, Tr, Table,
  TableContainer,
  Thead, Th, Tbody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Heading
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar";



const Sell = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("Here", data);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar />
      <Flex m="5px 45px" justifyContent="space-between">
        <Flex>
          <Text p="15px" fontWeight="bold" bg="#17a589" color="white" borderRadius="10px">Your shares balance: KES 2500</Text>
        </Flex>
        <Box>
          <Button onClick={onOpen} bg="tomato" fontWeight="bold" color="white">Sell Your Shares</Button>
        </Box>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex w="100%" align="center" justify="center">

              <Box w="360px" p="8% 0 0">
                <Box
                  pos="relative"
                  bg="white"
                  maxW="360px"
                  m="0 auto 100px"
                  p="45px"
                  textAlign="center"
                  gap="30px"
                  minH="40vh"
                >
                  <Heading mb="45px">Sell Your Sacco Shares</Heading>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      type="text"
                      placeholder="Your shares(KES)"
                      outline="0"
                      m="0 0 15px"
                      p="15px"
                      boxSizing="border-box"
                      fontSize="14px"
                      borderRadius="10px"
                      {...register("shares sold")}
                    />
                    <Button
                      fontSize="14px"
                      bg="tomato"
                      color="#fff"
                      w="100%"
                      borderRadius="30px"
                      m="0 0 30px"
                      type="submit"
                      p="15px"
                      cursor="pointer"
                      _hover={{ bg: "#17a589" }}
                    >
                      Sell
                    </Button>
                  </form>{" "}
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box m="50px 250px" boxShadow="0px 2px 20px rgba(0, 0, 0, 0.05)">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Sacco Name</Th>
                <Th>Seller Name</Th>
                <Th>Shares Volume</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Stima Sacco</Td>
                <Td>John Doe</Td>
                <Td >6500</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>John Doe</Td>
                <Td>1500</Td>
              </Tr>
              <Tr>
                <Td>Mwalimu Sacco</Td>
                <Td>Janice Doe</Td>
                <Td>2500</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>John Doe</Td>
                <Td>5500</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>John Doe</Td>
                <Td>500</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Sell;