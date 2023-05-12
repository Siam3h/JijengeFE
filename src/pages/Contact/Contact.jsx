import {
  Box,
  Flex,
  Heading,
  Input,
  Button
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import NavBar from '../../components/NavBar';


const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("Here", data);
  
  return (
    <>
    <NavBar />
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
                    minH="60vh"
                >
                    <Heading mb="45px">Contact Us</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            placeholder="First Name"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="border-box"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("First Name")}
                        />
                        <Input
                            type="text"
                            placeholder="Last Name"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="border-box"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("Last Name")}
                        />
                        <Input
                            type="text"
                            placeholder="email@example.com"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="border-box"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("Email")}
                        />
                        <Input
                            type="text"
                            placeholder="Your Message"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="50000px 50000px"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("Message Content")}
                        />
                        <Button
                            fontSize="14px"
                            bg="#17a589"
                            color="#fff"
                            w="100%"
                            borderRadius="30px"
                            m="0 0 30px"
                            type="submit"
                            p="15px"
                            cursor="pointer"
                            _hover={{ bg: "#17a589" }}
                        >
                            Send
                        </Button>
                    </form>{" "}
                </Box>
            </Box>
        </Flex>
        </>
  )
}

export default Contact;