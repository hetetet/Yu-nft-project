import React from 'react'
// import data from '../../../mock/newData.json'
import InfoCard from './infoCard'

interface CardControlProps {
  value: {
    _id: string
    image_url: string
    name: string
    assets_contract: {
      name: string
      cost: string
    }
  }
}
interface Value {}

const InfoCardControl: React.FC<CardControlProps> = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {/* {data?.assets.map((value: { _id?: string | undefined; image_url?: string | undefined; name?: string | undefined; asset_contract: { name?: string | undefined; cost?: string | undefined; }; } | undefined, id: React.Key | null | undefined) =>(
                    <InfoCard key ={id} value={value} />
                ))} */}
      </div>
    </>
  )
}

export default InfoCardControl
