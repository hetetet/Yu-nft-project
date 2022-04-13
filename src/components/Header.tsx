import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo/andreessen.png'
import coinbase from '../assets/logo/coinbase.png'
import combinator from '../assets/logo/combinator.png'
import trustwallet from '../assets/logo/trustwallet.png'
import quantstamp from '../assets/logo/quantstamp.png'

const style = {
  wrapper: `flex flex-col justify-evenly items-center bg-[#2081C8]`,
  container: `flex my-0.5 w-[8rem] my-3 cursor-pointer items-center`,
  img: ``,
  bottomContainer: ` h-[60rem]`,
  text: `font-medium text-xl text-[#808080]`,
  containerwrap: `flex bg-[#2081E2] justify-evenly w-[100%] items-center `,
  title: `text-2xl font-bold mt-5 mb-8`,
  button: `border border-solid w-[12rem] h-[3rem] text-xl mt-8 font-bold rounded-lg text-white bg-[#1781E2]`,
}

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.containerwrap}>
        <div className={style.container}>
          <Image className={style.img} src={logo} />
        </div>
        <div className={style.container}>
          <Image className={style.img} src={coinbase} alt="" />
        </div>
        <div className={style.container}>
          <Image className={style.img} src={combinator} />
        </div>
        <div className={style.container}>
          <Image className={style.img} src={trustwallet} />
        </div>

        <div className={style.text}>Dapper</div>
        <div className={style.container}>
          <Image className={style.img} src={quantstamp} />
          <div className={style.text}>Quantstamp</div>
        </div>
        <div className={style.container}>
          <div className={style.text}>FOUNDERS FUND</div>
        </div>
        <div className={style.container}>
          <div className={style.text}>
            BLOCK CHAIN <br /> CAPITAL
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>asdf</div>
    </div>
  )
}

export default Footer
