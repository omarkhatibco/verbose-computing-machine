import { FC, use } from 'react'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'

import { getWeather } from '../fetchers'
import { WeatherItem } from './WeatherItem'

type Props = {
  cityName: string
  firstDate: string
  endDate: string
}

export const ForcastedWeather: FC<Props> = async ({ cityName, firstDate, endDate }) => {
  const weather = await getWeather({ cityName, firstDate, endDate })

  return (
    <VStack
      gap={2}
      align={'stretch'}
    >
      <Heading size='md'>Forcasted Weather</Heading>
      <SimpleGrid
        columns={{ base: 2, md: 7 }}
        gap={4}
      >
        {weather?.days?.map((day, index) => (
          <WeatherItem
            key={index}
            {...day}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
