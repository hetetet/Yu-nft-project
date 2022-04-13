import React from 'react'
import ChartPragh from '../LineGraph/chart'
import TransferItems from '../Transfer/transferItem'

const style={
  container:`flex flex-col`
}

const BodyActivity = () => {
  return (
    <div className={style.container}>
        <ChartPragh />
        <TransferItems />
       
    </div>
  )
}

export default BodyActivity