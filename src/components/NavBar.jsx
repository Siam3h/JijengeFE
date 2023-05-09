import { Box, Flex, Link, List, ListItem } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <Box p="15px" position="sticky">
            <Flex flexDir="row" justify="space-between" m=" 5px 25px 15px">
                <Box fontSize="25px" fontWeight="bold">
                    <h3>Jijenge</h3>
                </Box>
                <Flex fontWeight="bold" flexDir="row" gap="15px">
                    <List>
                        <ListItem>Home</ListItem>
                    </List>
                    <List>
                        <ListItem>About</ListItem>
                    </List>
                    <List>
                        <ListItem>Contact</ListItem>
                    </List>
                    <List>
                        <Link href="/login"><ListItem>Sign In</ListItem></Link>
                    </List>
                </Flex>
            </Flex>
        </Box>
    )
}

export default NavBar