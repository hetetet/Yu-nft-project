import React from 'react'
import data from '../../../mock/newData.json'
// import InfoCard from './infoCard'
import InfoCard from './infoCard'


const InfoCardControl = () => {
    return (
    <div className='flex flex-wrap'>
    {data?.assets.map(( value, idx ) => 
    <InfoCard key={idx} value={value} /> )}
    </div>

    )
}

export default InfoCardControl;