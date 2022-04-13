import React from 'react'
import Mainbutton from './button/mainbutton'
import CategoryTitle from './categoryTitle/categoryTitle'
import Controller from './controller/controller'

const style ={
    container:`flex flex-col`,
    wrapper:`flex flex-col justify-center items-center mt-[5rem]`,
    decr:`text-[#808080] text-xl mt-[2rem]`,
    title:`flex font-bold text-4xl`,
   

}
const StatsContainer = () => {
  return (
    <div className={style.container}>
    <div className={style.wrapper}>
        <h1 className={style.title}>Top NFTs</h1>
        <p className={style.decr}>The top NFTs on OpenSea, ranked by volume, floor price and other statistics.</p>
        <div>
            <Mainbutton />
        </div>
        <div>
            <CategoryTitle />
        </div>
        <div >
            <Controller />
        </div>


    </div>
    </div>
  )
}

export default StatsContainer