import React from 'react'
import CardWrap from './cardWrap'
import data from '../../../../../mock/newData.json'

const Controller = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data?.assets.map((value, idx) => (
        <CardWrap key={idx} value={value} />
      ))}
    </div>
  )
}

export default Controller
