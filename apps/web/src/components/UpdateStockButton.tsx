'use client'

import { FC, useState } from 'react'
import {
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useDisclosure,
  VisuallyHiddenInput,
} from '@chakra-ui/react'

import { updateStock } from '../fetchers/updateStock'

export const UpdateStockButton: FC<{ currentValue: number; id: number }> = ({
  currentValue,
  id,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [value, setValue] = useState(currentValue)

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button size='sm'>update</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <form action={updateStock}>
            <PopoverArrow />
            <PopoverHeader>Update stock</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <VisuallyHiddenInput
                name='id'
                value={id}
              />
              <Input
                name='stock'
                placeholder='Update stock'
                type='number'
                value={value}
                onChange={e => setValue(Number(e.target.value))}
                required
              />
            </PopoverBody>
            <PopoverFooter>
              <Button
                colorScheme='green'
                type='submit'
                onClick={onClose}
              >
                save
              </Button>
            </PopoverFooter>
          </form>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
