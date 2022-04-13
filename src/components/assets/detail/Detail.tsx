import React from 'react'
import CollectionDropDown from './other/collectionDropDrown/collectionDropDown'
import DescDropDown from './other/descDropDown'
import DropDownCol from './other/dropdown'
import ItemsDropDown from './other/itemsDropDown'
import RenderingPage from './other/rendering/rendering'
import ToolTip from './other/tootTip'

const style = {
  container: `flex flex-col mt-10`,
  wrapper: `flex`,
  leftWrapper: `flex flex-col`,
  childwrapper: `flex flex-col  w-[38rem] p-4`,
  childcontainer: `flex flex-col  h-[9rem] justify-between`,
  colortitle: `flex text-blue ml-2 cursor-poiner`,
  miniCon: `flex text-xl `,
  text: `text-xl ml-4 text-[#808080]`,
  title: `text-3xl font-bold text-blue`,
  img: `w-[35rem] h-[35rem] mr-5 border border rounded-xl`,
  salesCon: `border border flex flex-col h-[20rem] mt-10 rounded-xl `,
  salesTime: `flex p-4 border-b-[1px] h-[10rem]`,
  salesBuy: `flex flex-col `,
  other: `flex items-center`,
}

interface Params {
  value: any
}

const Detail = ({ value }: Params) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.leftWrapper}>
          <div className={style.img}>
            {/* <RenderingPage /> */}
            <img src={value?.image_preview_url} />
            <p className={style.miniCon}>
              {value?.asset_contract?.name || 'Test'}
            </p>
          </div>
          <DescDropDown />
        </div>
        <div className={style.childwrapper}>
          <div className={style.childcontainer}>
            <p className={style.miniCon}>
              {value?.asset_contract?.name || 'Nodata'}
            </p>
            <p className={style.title}>{value?.name || 'Nodata'}</p>
            <div className={style.miniCon}>
              Owned by
              <p className={style.colortitle}>{value?.title || 'Nodata'}</p>
              <p className={style.text}>favorites</p>
            </div>
          </div>
          <div className={style.salesCon}>
            <div className={style.salesTime}>
              Sale ends March 4, 2022 at 10:37pm KST
            </div>

            <div className={style.salesBuy}>
              Top bid -- Reserve price not met.
              <div className={style.other}>
                12.1
                <ToolTip />
              </div>
            </div>
          </div>

          <DropDownCol />
        </div>
      </div>
      <ItemsDropDown />
      <CollectionDropDown value={value} />
    </div>
  )
}

export default Detail
