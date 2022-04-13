import React from 'react'


const style = {
    wrapper: `lg:flex flex-col justify-center items-center mt-[7rem]`,
    container: `grid lg:grid-cols-3 gap-3 lg:gap-5  justify-center`,
    image:`rounded-t-xl`,
    text: `font-medium text-3xl mb-10 text-center`,
    childcontainer: `flex  flex-col w-[22rem] text-lg  
    items-center border border-solid rounded-xl hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)] cursor-pointer`,
    textcontaineer:`flex flex-col p-5 font-semibold text-black text-xl`,

  }
const Browse = () => {
  return (
    <div className={style.wrapper}>
        <h1 className={style.text}>Browse by category</h1>
        <div className={style.container}>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/art.png'/>    
            <div className={style.textcontaineer} >Art</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/collectibles.png'/> 
            <div className={style.textcontaineer} >Collectibles</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/domain-names.png'/> 
            <div className={style.textcontaineer} >Domain Names</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/music.png'/> 
            <div className={style.textcontaineer} > Music</div>
            </div>
            <div  className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/photography-category.png'/> 
            <div className={style.textcontaineer} >Photography</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/sports.png'/> 
            <div className={style.textcontaineer} >Sports</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/trading-cards.png'/> 
            <div className={style.textcontaineer} >Trading Cards</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/utility.png'/> 
            <div className={style.textcontaineer} >Utility</div>
            </div>
            <div className={style.childcontainer}>
            <img className={style.image} src='https://opensea.io/static/images/categories/virtual-worlds.png'/> 
            <div className={style.textcontaineer} >Virtual Worlds </div></div>
        </div>
   
    </div>
  )
}

export default Browse