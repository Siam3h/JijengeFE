import { Box,Link , Button, Flex, Heading, Image } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Flex p="15px" m="0 45px" gap="45px" justify="space-evenly">
        <Box mt="80px" lineHeight="1.5rem">
          <Heading fontWeight="bold" mb="25px">Trade Your Sacco shares.<br /> Seamlessly.</Heading>
          <Box fontSize="18px">
          <p>Buy and sell your sacco shares through our borderless services.<br />
            We facilitate easier  buying and selling of shares<br />  without necessarily needing the unneccesary paper work<br />
            and put an endless search for buyers<br /> of your shares us we will provide instant buyers and sellers of sacco<br /> shares on our platform.
          </p>
          </Box>
          <Link href="/register"><Button mt="55px">Join Us</Button></Link>
        </Box>
        <Box>
          <Image h="450px" src="../../public/2MoneyIllustration.jpg" />
        </Box>
      </Flex>
    </>
  )
}

export default Home;