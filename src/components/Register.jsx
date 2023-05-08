import {
    Box,
    Input,
    Button,
    Heading,
    Text,
    Link,
    Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log("Here", data);
    return (
        <Flex w="100%" align="center" justify="center">
            <Box w="560px" p="8% 0 0" align="center" >
                <Box
                    pos="relative"
                    bg="white"
                    maxW="360px"
                    m="0 auto 100px"
                    p="45px"
                    textAlign="center"
                    boxShadow="0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
                    gap="30px"
                    minH="60vh"
                >
                    <Heading mb="45px">Sign Up</Heading>
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
                            {...register("Firstname")}
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
                            {...register("LastName")}
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
                            {...register("email")}
                        />
                        <Input
                            type="text"
                            placeholder="ID Number"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="border-box"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("ID")}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="border-box"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("password")}
                        />
                        <Button
                            fontSize="14px"
                            bg="#17a589"
                            color="#fff"
                            type="submit"
                            w="100%"
                            borderRadius="30px"
                            m="0 0 30px"
                            p="15px"
                            cursor="pointer"
                            _hover={{ bg: "#17a589" }}
                        >
                            SignUp
                        </Button>
                    </form>{" "}
                    <Link _hover={{ textDecoration: "none" }} href="/" maxW="10px">
                        {" "}
                        Already Have an Account?
                        <Text color="#17a589">Login</Text>
                    </Link>
                </Box>
            </Box>
        </Flex>
    );
};

export default Register;