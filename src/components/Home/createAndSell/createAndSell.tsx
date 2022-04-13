import React from 'react'


const style = {
    wrapper: `flex flex-col justify-center items-center mt-[7rem]`,
    container: ` lg:flex  lg:w-[84rem] lg:h-[20rem] lg:justify-between `,
    image:`w-10 h-10`,
    text: `font-medium text-3xl  `,
    childcontainer: `flex flex-col  text-center text-lg items-center text-[#808080] mt-[1rem]  lg:mt-[5rem] h-[15rem] lg:h-[20rem] w-[20rem]`,
    title: `text-black m-2 font-bold`,
  }
const CreateAndSell = () => {
  return (
    <div className={style.wrapper}>
         <div>
            <h1 className={style.text}>Create and sell your NFTs</h1>
        </div>
        <div className={style.container}>
         <div className={style.childcontainer}>
             <img className={style.image} 
             src='https://opensea.io/static/images/icons/wallet.svg'/>
             <div className={style.title}>Set up your wallet</div>
             <div>
             Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the <br/> <a href='https://support.opensea.io/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea' 
             className='text-[#1781E2]'
             > wallets we support.</a>
             </div>
             </div>
         <div className={style.childcontainer}>
         <img  className={style.image} 
          src='https://opensea.io/static/images/icons/collection.svg'/>
         <div className={style.title}>Create your collection</div>
            <div>
            Click <a href='https://opensea.io/login?referrer=%2Fcollections'
            className='text-[#1781E2]'
            > My Collections </a>and set up your collection. Add social links, a description, profile {'&'} banner images, and set a secondary sales fee.
            </div>
           </div>
         <div className={style.childcontainer}>
         <img   className={style.image} 
         src='https://opensea.io/static/images/icons/nft.svg'/>
         <div className={style.title}>Set up your wallet</div>
         <div>
         Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
         </div>
         </div>
         <div className={style.childcontainer}>
         <img  className={style.image} 
         src='https://opensea.io/static/images/icons/sale.svg'/>
         <div className={style.title}>List them for sale</div>
         <div>
         Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
         </div>
         </div>
        </div>

    </div>
  )
}

export default CreateAndSell