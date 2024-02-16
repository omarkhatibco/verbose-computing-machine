import { Forcast, Inventory } from '../types'
import { backendAPI } from '../utls'

export const getInventories = async () => {
  try {
    const response = await backendAPI.url('/inventory').get().json<Inventory[]>()
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getForcasts = async () => {
  try {
    const response = await backendAPI.url('/forcasts').get().json<Forcast[]>()
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}
