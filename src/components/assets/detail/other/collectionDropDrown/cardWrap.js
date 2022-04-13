import Link from 'next/link'
import React from 'react'

const style = {
  wrapper: `border border flex-auto w-[15rem]  my-3 mx-2 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-0.2rem] hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childWrapper: `flex justify-between p-2`,
  img: `flex mb-2`,
  name: `font-semibold text-sm text-[#808080]`,
  cardname: `font-semibold text-sm`,
  bottomWrap: `border-t border flex justify-between`,
  title: `m-2 font-semibold text-sm`,
  icon: `w-5 h-5 m-2`,
}
//informationdagi kichik kartalar ma'lumoti

const CardWrap = ({ value }) => {
  return (
    <Link href={value?._id} passHref>
      <a target="_blank">
        <div className={style.wrapper}>
          <div className={style.img}>
            <img src={value?.image_url || 'Not Availabe'} />
          </div>
          <div className={style.childWrapper}>
            <div>
              <div className={style.name}>
                {value?.asset_contract.name || 'Not Available'}
              </div>

              <div className={style.cardname}>
                {value?.name || 'Not Available'}
              </div>
            </div>
            <div>
              <p className={style.name}>Price</p>
              <div className={style.cardname}>
                {value?.asset_contract.cost || 'No value'}
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
      </a>
    </Link>
  )
}

export default CardWrap
