import { Carousel } from 'antd';
import React from 'react'


const style = {
    wrapper: `flex flex-col justify-center items-center mt-[5rem]`,
    container: `flex `,
    text: `font-medium text-3xl`,
    containerwrap: `flex gap-6 mt-[3rem]`,
    contentstyle:`bg-[#9DA092] flex flex-col items-center text-center text-white rounded-lg h-[38rem] w-[25rem] rounded-t-lg`,
    title: `text-2xl font-bold mt-5 mb-8`,
    button:`border border-solid px-4 mt-8 rounded-lg`
  }

const notableDrop = () => {
  return (
    <div className={style.wrapper}>
        <h1 className={style.text}>Notable Drops</h1>        
    <Carousel autoplay>
    <div className={style.container}>
      <div className={style.containerwrap}>
      <div className={style.contentstyle}>
        <img src='https://storage.opensea.io/static/promocards/segments-promocard2.jpeg' className='rounded-t-lg'/>
        <h1 className={style.title}>Segmented</h1>
        <h3>Capturing the essence of subjects via different sections of their bodies</h3>
        <button className={style.button}>live</button>
      </div>
      <div className={style.contentstyle}>
        <img src='https://storage.opensea.io/static/promocards/screen-promocard.png' className='rounded-t-lg'/>
        <h1 className={style.title}>Segmented</h1>
        <h3>Capturing the essence of subjects via different sections of their bodies</h3>
        <button className={style.button}>live</button>
      </div>
      <div className={style.contentstyle}>
        <img src='https://storage.opensea.io/static/promocards/dydx-promocard2.jpeg' className='rounded-t-lg'/>
        <h1 className={style.title}>Segmented</h1>
        <h3>Capturing the essence of subjects via different sections of their bodies</h3>
        <button className={style.button}>live</button>
      </div>
      </div>
    </div>
    

  </Carousel>



    </div>
  )
}

export default notableDrop