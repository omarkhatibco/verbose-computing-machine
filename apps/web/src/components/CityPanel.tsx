import { FC } from 'react'
import { TabPanel } from '@chakra-ui/react'

import { Forcast, Inventory } from '../types'

type Props = {
  forcast: Forcast
  inventory: Inventory
}

export const CityPanel: FC<Props> = ({ forcast, inventory }) => {
  return (
    <TabPanel>
      <p>one!</p>
    </TabPanel>
  )
}
