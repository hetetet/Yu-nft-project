import React from 'react'
import CategoryButton from './categoryButton'
import CoinButton from './coinbutton'
import StatsButton from './statsButton'

const style ={
    container:`flex w-[40rem] justify-between mt-10`
}

const Mainbutton = () => {
  return (
    <div className={style.container}>
    <StatsButton />
    <CategoryButton />
    <CoinButton />
    </div>
  )
}

export default Mainbutton