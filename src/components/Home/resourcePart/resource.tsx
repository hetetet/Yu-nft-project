import React from 'react'


const style = {
    wrapper: `flex flex-col justify-center items-center mt-[7rem]`,
    container: `grid lg:flex flex-auto w-[84rem] justify-center lg:justify-between`,
    image:`rounded-t-xl`,
    text: `font-medium text-3xl`,
    childcontainer: `flex  flex-col w-[26rem] mt-[5rem] text-lg  
    items-center border border-solid rounded-xl hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)] cursor-pointer`,
    textcontaineer:`flex flex-col p-5 font-semibold text-black text-xl`,

  }
const Resource = () => {
  return (
    <div className={style.wrapper}>
        <h1 className={style.text}>Resources for getting started</h1>
        <div className={style.container}>
            <div className={style.childcontainer}>
                <img className={style.image} src="https://opensea.io/blog/wp-content/uploads/2021/02/creating-selling-nfts.png"/>
            <div className={style.textcontaineer}>
            Important updates for listing and delisting your NFTs
            </div>
            <div>
            
            </div>
            </div>
            <div className={style.childcontainer}>
                <img className={style.image} src="https://opensea.io/blog/wp-content/uploads/2022/01/image-10.png"/>
            <div className={style.textcontaineer}>
            Important updates for listing and delisting your NFTs
            </div>
            </div>
            <div className={style.childcontainer}>
                <img className={style.image} src="https://opensea.io/blog/wp-content/uploads/2021/03/buy-nft-safely-on-opensea-1.png"/>
            <div className={style.textcontaineer}>
            Important updates for listing and delisting your NFTs
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Resource