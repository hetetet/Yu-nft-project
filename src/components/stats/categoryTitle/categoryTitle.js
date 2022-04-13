import React from 'react'
import StatsController from '../controller/statsController'


const style ={
    container:`flex font-semibold text-black mt-10 `,
    wrapper:`flex w-[70rem] justify-between`,
    title:`flex w-[45rem] justify-between cursor-pointer`
}
const CategoryTitle = () => {
  return (
    <div className={style.container}>
          <div className={style.wrapper}>
              <p>Collection</p>
              <div className={style.title}>
                  <p>Volume</p>
                  <p>24h %</p>
                  <p>7d %</p>
                  <p>Floor Price</p>
                  <p>Owners</p>
                  <p>Items</p>
              </div>
          </div>
        
    </div>
  )
}

export default CategoryTitle