import React from 'react'
import BodyCard from './bodyCard'
import BodyFilter from './filter/infor'

const style ={
    container:`flex w-[100vw]`,
    bodyFilter:``,
    bodycard:``,
}
const BodyPart = () => {
  return (
    <div className={style.container} >
        <div className={style.bodyFilter}>
        <BodyFilter />
        </div>
        <div className={style.bodycard}>
        <BodyCard />
        </div>
    </div>
  )
}

export default BodyPart