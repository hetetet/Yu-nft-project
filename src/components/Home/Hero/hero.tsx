import React from 'react'


const style = {
    wrapper: `lg:relative flex justify-center`,
    container: `before:content-['']  before:bg-red-500  before:absolute 
    before:top-0 before:left-0 before:right-0 before:bottom-0
    before:bg-[url('https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=w600')]
    before:bg-cover before:bg-bottom before:opacity-20 before:blur
    lg:h-[36rem]
`,
    contentWrapper: `
    flex justify-center  
    lg:flex h-screen relative flex-wrap
    `,
    contentBodyWrapper:`
    lg:flex lg:mt-[3rem] lg:justify-evenly 
   `,
    contentWrapperMini:`
    lg:flex  lg:h-2/4  flex justify-center items-center`,
    copyContainer: `
    flex-col w-1/2 justify-center mt-[2rem] 
    lg:w-3/4
    `,
    title: `
    relative text-black text-[30px] text-center lg:text-left font-semibold
    lg:text-[46px] lg:text-left
    `,
    description: `text-[rgb(53, 56, 64)] lg:w-[25rem] text-center text-2xl mt-[0.2rem] mb-[1rem]
    lg:text-left`,
    ctaContainer: `flex justify-between ml-[-1rem] lg:w-[25rem]`,
    accentedButton: `
    px-8 py-1
     relative text-lg font-semibold lg:px-12 lg:py-2 bg-[#2181e2]  rounded-lg text-white   hover:bg-[#42a0ff] shadow hover:shadow-xl cursor-pointer`,
    button: `
    px-8 py-1
    relative text-lg font-semibold lg:px-12 lg:py-2 bg-white ml-5 rounded-lg text-[#2181e2] border-solid border-2 border-sky-500 shadow hover:shadow-xl cursor-pointer`,
    cardContainer: `flex-col
    hover hover:shadow-xl cursor-pointer shadow-xl
    h-[22rem] w-[20rem]
    lg:w-[30rem] lg:h-[20rem]
   `,
   img:`rounded-t-lg h-[18rem] w-[20rem] lg:w-[30rem] lg:h-[20rem] `,
    infoContainer: `h-[4rem] bg-white rounded-b-lg flex p-3 text-white font-semibold
    lg:h-20`,
    author: `flex flex-col text-black ml-4`,
    name: ``,
    imgWrapper:`flex justify-center mt-[3rem] h-fit`,
  }


const Hero = () => {
  return (
  
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.contentBodyWrapper}>
                <div className={style.contentWrapperMini}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                    Discover, collect, and sell extraordinary NFTs
                    </div>
                    <div className={style.description}>
                    OpenSea is the world's first and largest NFT marketplace
                    </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                    </div>
                </div>
                <div className={style.imgWrapper}>
                <div className={style.cardContainer}>
                <img className={style.img}  src="https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=w600" />
                <div className={style.infoContainer}>
                    <img
                    className='h-[2.25rem] rounded-full' 
                    src='https://lh3.googleusercontent.com/XuDfRQtqu8q9sOIW2VkGokR_CEFDxybbmrNG31R8dAEboi4Co5qdn-JUwmtG0S7JYhCnj4wK5rSbi-J6giG8zTXBvE_u8I0ymhRPgA=s80'
                    alt="cartWrap"
                    />
                    <div className={style.author}>
                        <div className={style.name}>ATHENA</div>
                        <a
                        className='text-[#1868b7]'
                        href="#"
                        >
                        animkhitaryan
                        </a>
                    </div>
                </div>
                </div>
                </div>
        </div>
        </div>
        </div>
     </div>
  )
}

export default Hero