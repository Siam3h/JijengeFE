import { Card, CardHeader, CardBody, SimpleGrid, Button, Heading, Text, Box } from '@chakra-ui/react'
import NavBar from './NavBar'

const Buy = () => {
  return (
    <>
    <NavBar />
    <Heading textAlign="center" mb="45px">Buy Sacco Shares</Heading>
    <Box m="45px">
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
          <CardHeader>
            <Heading size='md'> John Doe</Heading>
          </CardHeader>
          <CardBody>
            <Text> Shares Volume : KES 2500</Text>
            <Button bg="#17a589" color="white" mt="45px">Buy</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> John Doe</Heading>
          </CardHeader>
          <CardBody>
            <Text> Shares Volume : KES 2500</Text>
            <Button bg="#17a589" color="white" mt="45px">Buy</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> John Doe</Heading>
          </CardHeader>
          <CardBody>
            <Text> Shares Volume : KES 2500</Text>
            <Button bg="#17a589" color="white" mt="45px">Buy</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> John Doe</Heading>
          </CardHeader>
          <CardBody>
            <Text> Shares Volume : KES 2500</Text>
            <Button bg="#17a589" color="white" mt="45px">Buy</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> John Doe</Heading>
          </CardHeader>
          <CardBody>
            <Text> Shares Volume : KES 2500</Text>
            <Button bg="#17a589" color="white" mt="45px">Buy</Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
    </>
  )
}

export default Buy;