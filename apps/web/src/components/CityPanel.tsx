import { FC, Suspense } from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  TabPanel,
  VStack,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

import { Forcast, Inventory } from '../types'
import { getInventoryStats } from '../utls'
import { ForcastedWeather } from './ForcastedWeather'
import { UpdateStockButton } from './UpdateStockButton'

const ISO_FORMAT = 'YYYY-MM-DD'

dayjs.extend(LocalizedFormat)

type Props = {
  cityName: string
  forcast: Forcast
  inventory: Inventory
}

export const CityPanel: FC<Props> = ({
  cityName,
  forcast: { forecasted_sales, date },
  inventory: { currentStock, incomingStock, id },
}) => {
  const firstData = dayjs(date)
  const endDate = dayjs(date).add(2, 'week')
  const formatedFirstData = firstData.format('ll')
  const formatedEndData = endDate.format('ll')

  const { isStockLowerThanForecast, daysToStockout } = getInventoryStats({
    forecasted_sales,
    currentStock,
    incomingStock,
  })

  return (
    <TabPanel>
      <VStack
        gap={4}
        align={'stretch'}
      >
        {isStockLowerThanForecast && (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Your will be out of stock!</AlertTitle>
            <AlertDescription>
              Your stocks might run out on {dayjs().add(daysToStockout, 'day').format('ll')}.
            </AlertDescription>
          </Alert>
        )}

        <StatGroup>
          <Stat>
            <StatLabel>Forecasted Sales</StatLabel>
            <StatNumber>{forecasted_sales}</StatNumber>
            <StatHelpText>
              {formatedFirstData} - {formatedEndData}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Current Stock</StatLabel>
            <StatNumber>{currentStock}</StatNumber>
            <UpdateStockButton
              currentValue={currentStock}
              id={id}
            />
          </Stat>
          <Stat>
            <StatLabel>Incoming Stock</StatLabel>
            <StatNumber>{incomingStock}</StatNumber>
            <StatHelpText>
              {formatedFirstData} - {formatedEndData}
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Suspense>
          <ForcastedWeather
            cityName={cityName}
            firstDate={firstData.format(ISO_FORMAT)}
            endDate={endDate.format(ISO_FORMAT)}
          />
        </Suspense>
      </VStack>
    </TabPanel>
  )
}
