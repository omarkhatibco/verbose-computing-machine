import { FC } from 'react'
import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { Day } from '../types'

export const WeatherItem: FC<Day> = ({ datetime, temp, tempmax, tempmin, description, icon }) => {
  return (
    <VStack
      gap={2}
      borderWidth={1}
      borderRadius='md'
      p={4}
    >
      <Text size='xs'>{dayjs(datetime).format('DD-MM')}</Text>
      <Image
        src={`/weather/${icon}.png`}
        alt={description}
      />
      <Heading size='md'>{temp}°</Heading>
      <Text size='xs'>
        H: {tempmax}° L:{tempmin}°
      </Text>
    </VStack>
  )
}
