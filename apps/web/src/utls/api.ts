import { env } from 'node:process'
import wretch from 'wretch'
import AbortAddon from 'wretch/addons/abort'
import QueryStringAddon from 'wretch/addons/queryString'

export const backendAPI = wretch(env?.BACKEND_URL)
  .addon(QueryStringAddon)
  .addon(AbortAddon())
  .errorType('json')
