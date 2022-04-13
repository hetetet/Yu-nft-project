import Link from 'next/link'
import React from 'react'

interface InfoCardProps {
  value: any
}

const style = {
  wrapper: `border-gray border flex-auto w-[22rem]  my-3 mx-2 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-0.2rem] hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childWrapper: `flex justify-between p-2`,
  img: `flex mb-2`,
  name: `font-semibold text-sm text-[#808080]`,
  cardname: `font-semibold text-sm`,
  bottomWrap: `border-t border flex justify-between`,
  title: `m-2 font-semibold text-sm`,
  icon: `w-5 h-5 m-2`,
}
//informationdagi kichik kartalar ma'lumoti

const InfoCard = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.img}>
          <img src="{value?.image_url || 'Not Availabe'}" />
        </div>
        <div className={style.childWrapper}>
          <div>
            <div className={style.name}>

            </div>

            <div className={style.cardname}>

            </div>
          </div>
          <div>
            <p className={style.name}>Price</p>
            <div className={style.cardname}>

            </div>
          </div>
        </div>
        <div className={style.bottomWrap}>
          <div className={style.title}>Buy now</div>
          <div>
            <img
              className={style.icon}
              src="https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
