import React, { FC } from 'react'
import BodyPart from './bodyPart'
import CardInfoTop from './cardInfoTop'
import ItemsActivityPage from './ItemsActivity/ItemsActivity'

interface cardDetailProps {
  value?: any
}

const style = {
  container: `flex flex-col `,
  wrapper: ` h-[12rem]`,
  childcon: `flex flex-col items-center justify-center `,
  profilewrap: ` w-28 h-28 mt-[-3rem] rounded-full`,
  childwrap: ` flex w-[28rem] h-[6rem] rounded-md`,
  body: `flex`,
}

const cardDetail = ({ value }: cardDetailProps) => {
  return (
    <>
      <div className={style.container}>
        <CardInfoTop value={value} />
        <div className={style.childcon}>
          <div className={style.body}>
            <ItemsActivityPage />
          </div>
          {/*    
    <BodyPart value={value}  /> */}
        </div>
      </div>
    </>
  )
}

export default cardDetail
