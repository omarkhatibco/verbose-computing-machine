import wretch from 'wretch'
import AbortAddon from 'wretch/addons/abort'
import QueryStringAddon from 'wretch/addons/queryString'

export const backendAPI = wretch(process.env?.BACKEND_URL)
  .addon(QueryStringAddon)
  .addon(AbortAddon())
  .errorType('json')

export const weatherApi = wretch(
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
)
  .addon(QueryStringAddon)
  .query({
    key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    unitGroup: 'metric',
    contentType: 'json',
    include: 'days',
  })
  .addon(AbortAddon())
  .errorType('json')
