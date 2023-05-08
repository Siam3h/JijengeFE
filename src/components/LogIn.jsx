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

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log("Here", data);
    return (
        <Flex w="100%" align="center" justify="center">

            <Box w="360px" p="8% 0 0">
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
                    <Heading mb="45px">Log In</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            placeholder="username"
                            outline="0"
                            m="0 0 15px"
                            p="15px"
                            boxSizing="border-box"
                            fontSize="14px"
                            borderRadius="10px"
                            {...register("username")}
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
                            w="100%"
                            borderRadius="30px"
                            m="0 0 30px"
                            type="submit"
                            p="15px"
                            cursor="pointer"
                            _hover={{ bg: "#17a589" }}
                        >
                            Login
                        </Button>
                        <Link
                            _hover={{ textDecoration: "none" }}
                            href="/signup"
                            maxW="10px"
                        >
                            {" "}
                            <Text color="#17a589">Sign Up</Text>
                            If you don&apos;t have an account{" "}
                        </Link>
                    </form>{" "}
                </Box>
            </Box>
        </Flex>
    );
};

export default Login;
