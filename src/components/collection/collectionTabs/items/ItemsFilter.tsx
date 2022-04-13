import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'

const style = {
  container: `flex flex-col border border w-[20rem] h-[60rem] `,
  wrapper: `border border cursor-pointer `,
  childWrap: `p-4 font-bold text-lg`,
  filterWrap: `border border cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childMiniWrap: ` flex flex-wrap  items-center gap-5 p-4 bg-[#e8f4f8]`,
  buttonWrap: `border border flex flex-wrap items-center p-2 w-[7rem] rounded-lg bg-white  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  inputWrap: ` border border p-2 w-[6rem] rounded-lg outline-0  ring-0 px-2 pl-0 text-[black] bg-white placeholder:text-[#8a939b]`,
  dropdownCash: `flex w-full border border cursor-pointer p-2 rounded-lg bg-white `,
  childWrapCast: `flex flex-col p-2 bg-[#e8f4f8]`,
  titleCost: `p-2`,
  otherWrap: `flex ml-2`,
  moneyWrap: `rounded-full flex w-8 h-8`,
  saleWrap: `flex flex-col bg-[#e8f4f8]`,
}

const ItemsFilter = () => {
  const [open, setOpen] = useState(true)
  const [opened, setOpened] = useState(true)
  const [openCLick, setopenClick] = useState(true)
  const [openSale, setopenSale] = useState(true)
  const [checked, setChecked] = useState([1])

  const handleClick = () => {
    setOpen(!open)
    console.log('click')
  }
  const handleClickPrice = () => {
    setOpened(!opened)
    console.log('click')
  }
  const handleClickChains = () => {
    setopenClick(!openCLick)
    console.log('click')
  }
  const handleSale = () => {
    setopenSale(!openSale)
    console.log('click')
  }

  function handleToggle(value: number) {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <div className={style.container}>
      <div className={style.filterWrap}>
        <p className={style.childWrap}>Filter</p>
      </div>
      <div className={style.wrapper} onClick={handleClick}>
        <p className={style.childWrap}>Status</p>
        {open ? (
          <></>
        ) : (
          <div className={style.childMiniWrap}>
            <div className={style.buttonWrap}>Buy Now</div>
            <div className={style.buttonWrap}>On Auction</div>
            <div className={style.buttonWrap}>New</div>
            <div className={style.buttonWrap}>Has Offers</div>
          </div>
        )}
      </div>
      <div className={style.wrapper} onClick={handleClickPrice}>
        <p className={style.childWrap}>Price</p>
        {opened ? (
          <></>
        ) : (
          <div className={style.childMiniWrap}>
            <div className={style.dropdownCash}>United States Dollar</div>

            <input className={style.inputWrap} />
            <p>to</p>
            <input className={style.inputWrap} />

            <div className={style.buttonWrap}>apply</div>
          </div>
        )}
      </div>
      <div className={style.wrapper} onClick={handleClickChains}>
        <p className={style.childWrap}>Chains</p>
        {openCLick ? (
          <></>
        ) : (
          <div className={style.childWrapCast}>
            <div className={style.otherWrap}>
              <img
                className={style.moneyWrap}
                src="https://opensea.io/static/images/logos/ethereum.png"
              />
              <p className={style.titleCost}>Ethereum</p>
            </div>
            <div className={style.otherWrap}>
              <img
                className={style.moneyWrap}
                src="https://opensea.io/static/images/logos/polygon.svg"
              />
              <p className={style.titleCost}>Polygon</p>
            </div>
            <div className={style.otherWrap}>
              <img
                className={style.moneyWrap}
                src="https://opensea.io/static/images/logos/klaytn.png"
              />
              <p className={style.titleCost}>Klaytn</p>
            </div>
          </div>
        )}
      </div>
      <div className={style.wrapper} onClick={handleSale}>
        <p className={style.childWrap}>On Sale In</p>
        {openSale ? (
          <></>
        ) : (
          <div className={style.saleWrap}>
            <List dense sx={{ width: '100%', maxWidth: 360 }}>
              {[0, 1].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={() => handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText id={labelId} primary={`ETH ${value + 1}`} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemsFilter
