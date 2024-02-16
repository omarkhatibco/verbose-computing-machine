import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <Container
      h='100dvh'
      maxW='container.xl'
      alignItems={'center'}
      display='flex'
    >
      <Card w='full'>
        <CardHeader>
          <Heading size='lg'>ONEGLASS.io</Heading>
        </CardHeader>
        <CardBody>
          <Tabs>
            <TabList>
              <Tab>Hamburg</Tab>
              <Tab>Munich</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>2!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </Container>
  )
}
