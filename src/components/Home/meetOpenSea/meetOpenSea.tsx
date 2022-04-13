import Link from 'next/link'
import React from 'react'


const style ={
    wrapper: `flex flex-col items-center justify-center mt-[5rem] bg-[#F3FBFE]`,
    title: `text-center font-bold text-5xl m-8`,
    desc:` text-[#808080] mb-12`,
    video:`w-[70rem] h-[40rem]`,
    button:`h-[3rem] w-[13em] text-xl mt-10 mb-20 font-bold rounded-lg text-white bg-[#1781E2]`
}
const MeetOpenSea = () => {
  return (
    <div className={style.wrapper}>
        <h1 className={style.title}>Meet OpenSea</h1>
        <h2 className={style.desc}>The NFT marketplace with everything for everyone</h2>
      
        {/* <iframe className={style.video} src="https://www.youtube.com/embed/gfGuPd1CELo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}

        <Link href='/explore'>
        <button  
        className={style.button}>
        <div>
        Explore the marketplace
        </div>
        </button>
        </Link>
    </div>
  )
}

export default MeetOpenSea