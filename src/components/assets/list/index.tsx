import React, { useState } from 'react'
import useSWR from 'swr'
import AssetListHeader from './AssetListHeader'
import InfoCard from './InfoCard'

// import PriceDropButton from './otherDetail/priceDropButton'


const apiRoot = process.env.NEXT_PUBLIC_API_ROOT
const apiKey = process.env.APIKEY

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

const style = {
  container: `flex flex-col p-8`,
}

interface Params { }

const AssetList = ({ }: Params) => {
  const [on, setOn] = useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const action = 'api/v1/assets'
  const url = `${apiRoot}/${action}`

  const headers = {
    'X-API-KEY': apiKey,
  }

  const { data, error } = useSWR([url, headers], fetcher)

  console.log("data:", data);


  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={style.container}>
      <AssetListHeader on={on} setOn={setOn} />
      {/* {on ? 'on' : 'off'} */}
      <div className="flex flex-wrap">

        <InfoCard />

      </div>
    </div>
  )
}

export default AssetList
