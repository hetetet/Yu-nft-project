import React from 'react'
import data from '../../../mock/newData.json'
import StatsController from './statsController'
const Controller = () => {
  return (
    <div>
        {
            data.assets.map((value, idx)=>(
                <StatsController value={value} key={idx}/>
            ))
        }
    </div>
  )
}

export default Controller