import { Box, Flex, Link, List, ListItem } from '@chakra-ui/react'


const NavBar = () => {

    const isLoggedIn = false;

    return (
        <Box p="15px" position="sticky">
            <Flex flexDir="row" justify="space-between" m=" 5px 25px 15px">
                <Box fontSize="25px" fontWeight="bold">
                    <h3>Jijenge</h3>
                </Box>
                <Flex fontWeight="bold" flexDir="row" gap="15px">
                    <List>
                        <Link href="/"><ListItem>Home</ListItem></Link>
                    </List>
                    <List>
                        <Link href="/about"><ListItem>About</ListItem></Link>
                    </List>
                    <List>
                        <Link href="/contact"><ListItem>Contact</ListItem></Link>
                    </List>
                    <List>

                        { isLoggedIn ? <Link href="/"><ListItem>Sign Out</ListItem></Link> : <Link href="/login"><ListItem>Sign In</ListItem></Link>}


                    </List>
                    <List>

                        { isLoggedIn ? <Link href="/dashboard"><ListItem>Dashboard</ListItem></Link> : <Link href="/"><ListItem></ListItem></Link>}


                    </List>
                </Flex>
            </Flex>
        </Box>
    )
}

export default NavBar