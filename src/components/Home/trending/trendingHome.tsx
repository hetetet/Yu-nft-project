import React from 'react'

const style = {
    wrapper: `flex flex-col justify-center items-center mt-[7rem]`,
    container: `flex border-2 border-solid-black w-[80rem] h-[30rem]`,
    text: `font-medium text-3xl`,
    containerwrap: `flex gap-6 mt-[3rem]`,
    contentstyle:`bg-[#9DA092] flex flex-col items-center text-center text-white rounded-lg h-[38rem] w-[25rem] rounded-t-lg`,
    title: `text-2xl font-bold mt-5 mb-8`,
  }


const TrendingHome = () => {
  return (
    <div className={style.wrapper}>
    <div>
        <h1 className={style.text}>Trending in all categories</h1>
    </div>
    <div className={style.container}>
        Main information
    </div>

</div>
  )
}

export default TrendingHome