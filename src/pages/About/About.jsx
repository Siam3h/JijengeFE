import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const About = () => {

    return (
        <>
            <NavBar />
            <Box mr="50px" ml="50px" lineHeight="2rem">
                <Flex mt="5px" flexDir="column">
                    <Box mb="25px" textAlign="center">
                        <Heading mb="10px">About Our Sacco Shares Trading Platform</Heading>
                        <Text fontSize="18px">Welcome to our Sacco Shares Trading Platform, empowering members to buy and sell shares with ease. <br />
                            <Text fontWeight='bold'>Our Vision</Text>Simplifying Sacco Share Trading for Everyone <br />
                            <Text fontWeight='bold'> Our Mission</Text> Facilitating secure and efficient buying and selling of Sacco shares for our members.</Text>
                    </Box>
                    <Flex m="25px">
                        <Box flex="4">
                            <Heading mb="10px">Why Choose Our Sacco Shares Trading Platform</Heading>
                            <Text fontSize="18px">
                                <Text fontWeight='bold'>Secure Transactions </Text>Rest assured that your share transactions are protected by robust security measures.<br />
                                <Text fontWeight='bold'>  User-Friendly Interface</Text> Our platform is designed with simplicity in mind, ensuring a seamless trading experience for all users.<br />
                                <Text fontWeight='bold'>  Broad Sacco Network</Text> Access a diverse range of Sacco shares to diversify your investment portfolio.<br />
                                <Text fontWeight='bold'> Transparent Market Data</Text> Get access to real-time market information and analytics to make informed investment decisions.<br />
                            </Text>
                        </Box>
                        <Box flex="4">
                            <Image h="450px" src="../../public/Choose.png" />
                        </Box>
                    </Flex>
                    <Flex m="25px">
                        <Box flex="4">
                            <Image h="450px" src="../../public/Developer-activity.png" />
                        </Box>
                        <Box flex="4">
                            <Heading mb="10px">How Our Sacco Shares Trading Platform Works</Heading>
                            <Text fontSize="18px">
                                <Text fontWeight='bold'>  Simple Registration Process</Text> Join our platform quickly and start trading shares in Saccos hassle-free.<br />
                                <Text fontWeight='bold'>  Buying and Selling Shares</Text>Discover the ease of buying and selling shares within our intuitive trading platform.<br />
                                <Text fontWeight='bold'>  Secure Transactions</Text> Rest assured that your funds and shares are protected through our secure transaction protocols.<br />
                                <Text fontWeight='bold'>  Portfolio Management</Text> Monitor and manage your share portfolio efficiently using our comprehensive tools and features.<br />
                            </Text>
                        </Box>
                    </Flex>
                    <Flex m="25px">
                        <Box flex="4">
                            <Heading mb="10px">Our Commitment to Customer Support</Heading>
                            <Text fontSize="18px">
                                <Text fontWeight='bold'>  Dedicated Support Team</Text>Our friendly customer support team is ready to assist you with any inquiries or issues.<br />
                                <Text fontWeight='bold'>  Timely Assistance</Text>We strive to provide prompt responses and resolutions to ensure your trading experience is smooth.<br />
                                <Text fontWeight='bold'>  Educational Resources</Text> Access our library of educational materials to enhance your knowledge about Sacco shares trading.<br />
                            </Text>
                        </Box>
                        <Box flex="4">
                            <Image h="450px" src="../../public/Contact-us.png" />
                        </Box>
                    </Flex>
                    <Box m="25px" textAlign="center" mb="25px" display="block">
                        <Heading mb="10px">Our Mission for Financial Empowerment</Heading>
                        <Text fontSize="18px">
                            <Text fontWeight='bold'>  Empowering Investors</Text> We aim to empower individuals to participate in the Sacco shares market and unlock financial opportunities.<br />
                            <Text fontWeight='bold'>  Democratizing Investments</Text> Our platform makes investing in Sacco shares accessible to all, regardless of background or experience.<br />
                            <Text fontWeight='bold'>  Financial Education</Text> We believe in providing resources and guidance to enhance financial literacy among our members.<br />
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default About;
