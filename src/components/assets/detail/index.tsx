import React, { useState } from 'react'
import useSWR from 'swr'
import { log } from '../../../utils/log'
import Detail from './Detail'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT
const apiKey = process.env.APIKEY

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

interface Params {
  chain: string
  contractAddress: string
  tokenId: string
}

export default function AssetDetail({
  chain,
  contractAddress,
  tokenId,
}: Params) {
  const [includeOrders, setIncludeOrders] = useState<boolean>(false)
  const action = 'api/v1/asset'
  const url = `${apiRoot}/${action}/${contractAddress}/${tokenId}?include_orders=${includeOrders}`

  const headers = {
    'X-API-KEY': apiKey,
  }

  const { data, error } = useSWR([url, headers], fetcher)

  if (!data) {
    return <>Loading...</>
  }
  log('asset data: ', data)

  return (
    <div>
      {chain} {contractAddress}/{tokenId}
      <Detail value={data} />
    </div>
  )
}
