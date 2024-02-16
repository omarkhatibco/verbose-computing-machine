import { WeatherResponse } from '../types'
import { weatherApi } from '../utls'

type Props = {
  cityName: string
  firstDate: string
  endDate: string
}

export const getWeather = async ({ cityName, firstDate, endDate }: Props) => {
  try {
    const response = await weatherApi
      .url(`/${cityName}/${firstDate}/${endDate}`)
      .get()
      .json<WeatherResponse>()
    return response
  } catch (error) {
    console.error(error)
  }
}
