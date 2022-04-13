import type { NextApiResponse } from 'next'
import useSWR from 'swr'
import { log } from '../../../utils/log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT
const apiKey = process.env.APIKEY

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

interface Params {
  query: {
    slug: string
  }
}

export default function collectionHandler(
  { query }: Params,
  res: NextApiResponse
) {
  try {
    const action = 'api/v1/assets'

    const url = `${apiRoot}/${action}?assets?collection_slug=${query.slug}`

    const headers = {
      'X-API-KEY': apiKey,
    }

    const { data, error } = useSWR([url, headers], fetcher)
    log('assets data: ', data)
    let assets = JSON.parse(data)
    res.status(200).json(assets)
  } catch (error: any) {
    log('error in api: ', error)
    res.status(404)
  }
}
