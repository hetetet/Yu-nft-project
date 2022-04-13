import React from 'react'
import { useSelector } from 'react-redux'


interface CardInfoTopProps{
  value:any;
    state?:{
      asset?:{
        collection?:string,
      
    } 
    }

}

const style = {
  container: `flex flex-col`,
  wrapper: ` h-[12rem]`,
  childcon: `flex flex-col items-center justify-center `,
  childwrap: `flex items-right justify-end`,
  photolistcon: `flex justify-between border-2 border-solid w-full`,
  profilewrap: `border-4 border-white w-28 h-28 mt-[-3rem] rounded-full`,
  name: `flex font-bold text-4xl`,
  author: ``,
  // childwrap: `flex rounded-md items-center justify-evenly`,
  desc: `flex justify-center text-center w-[40rem] mt-10`,
  itemscon: `flex font-bold text-2xl  border border-gray h-[5.8rem] w-[8rem] flex  items-center justify-evenly cursor-pointer  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)] `,
  text: `flex flex flex-col justify-center items-center`,
  title: `text-[#808080]  text-lg font-normal`,
  br: ` border-r-2 border-black `
}
const CardInfoTop: React.FC<CardInfoTopProps> = () => {
  const collection = useSelector((state:any) => state.asset.collection)
  console.log('done:', collection);
  return (
    <div>
      <div className={style.container}>
        <img className={style.wrapper}
          src={collection?.image_url || "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}></img>

        <div className={style.childcon}>
          <div className={style.childwrap}>
            {/* <div className={style.photolistcon}> */}
            <img className={style.profilewrap} src={collection?.image_url || "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"} ></img>
            {/* <div>+ add to watchlist</div>
    </div> */}
          </div>
          <div className={style.name}>{collection?.name || "Not Availabe"}</div>
          <div className={style.author}>author</div>
          <div className={style.childwrap}>
            <div className={style.itemscon}>
              <div className={style.text}>
                {collection?.total_supply || "no items"}
                <p className={style.title}>items</p>
              </div>
            </div>

            <div className={style.itemscon}>
              <div className={style.text}>
                {collection?.owner || "no items"}
                <p className={style.title}>owners</p>
              </div>
            </div>

            <div className={style.itemscon}>
              <div className={style.text}>
                {collection?.stats?.floor_price || "no items"}
                <p className={style.title}>floor price</p>
              </div>
            </div>

            <div className={style.itemscon}>
              <div className={style.text}>
                {collection?.total_volume || "no items"}
                <p className={style.title}>volume traded</p>
              </div>
            </div>
          </div>
          <div className={style.desc}>{collection?.description}</div>
        </div>
      </div>
    </div>
  )
}

export default CardInfoTop;