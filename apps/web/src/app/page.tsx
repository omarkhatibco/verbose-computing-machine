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

import { CityPanel } from '../components'
import { getForcasts, getInventories } from '../fetchers'

const cites = {
  hamburg: {
    weatherName: 'Hamburg',
    backendName: 'Beachside',
  },
  munich: {
    weatherName: 'Munich',
    backendName: 'City Center',
  },
}

export default async function Index() {
  const inventories = await getInventories()
  const forcasts = await getForcasts()

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
              {Object.entries(cites).map(([key, value]) => (
                <Tab key={key}>{value.weatherName}</Tab>
              ))}
            </TabList>

            <TabPanels>
              {Object.entries(cites).map(([key, value]) => (
                <CityPanel
                  forcast={forcasts?.find(item => item.location === value.backendName)}
                  inventory={inventories?.find(item => item.location === value.backendName)}
                />
              ))}
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </Container>
  )
}
