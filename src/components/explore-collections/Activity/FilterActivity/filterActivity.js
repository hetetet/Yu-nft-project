import React from 'react'


const style = {
  container: `flex flex-col  border border w-[20rem] `,
  wrapper: `border border cursor-pointer `,
  childWrap: `p-4 font-bold text-lg`,
  filterWrap: `border border cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childMiniWrap: ` flex flex-wrap  items-center gap-5 p-4 bg-[#e8f4f8]`,
  buttonWrap: `border border flex flex-wrap items-center p-2 w-[8rem] rounded-lg bg-white  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  inputWrap: ` border border p-2 w-[6rem] rounded-lg outline-0  ring-0 px-2 pl-0 text-[black] bg-white placeholder:text-[#8a939b]`,
  dropdownCash: `flex w-full border border cursor-pointer p-2 rounded-lg bg-white `,
  childWrapCast: `flex flex-col p-2 bg-[#e8f4f8]`,
  titleCost: `p-2`,
  otherWrap: `flex ml-2`,
  moneyWrap: `rounded-full flex w-8 h-8`,
  saleWrap:`flex flex-col bg-[#e8f4f8]`
}
const ActivityFilter = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };



  const [open, setOpen] = React.useState(true);
  const [opened, setOpened] = React.useState(true);
  const [openCLick, setopenClick] = React.useState(true);
 


  const handleClick = () => {
    setOpen(!open);
    console.log("click");
  };

  const handleClickChains = () => {
    setopenClick(!openCLick);
    console.log("click");
  };

  return (
    <div className={style.container}>
      <div className={style.filterWrap}>
        <p className={style.childWrap}>Filter</p></div>
      <div className={style.wrapper} onClick={handleClick}>

        <p className={style.childWrap}>Status</p>
        {open
          ?
          <di></di>
          :
          <div className={style.childMiniWrap}>
            <div className={style.buttonWrap}>
              Listings
            </div>
            <div className={style.buttonWrap}>
              Sales
            </div>
            <div className={style.buttonWrap}>
              Bids
            </div>
            <div className={style.buttonWrap}>
              Transfers
            </div>
          </div>
        }

      </div>
    
      <div className={style.wrapper} onClick={handleClickChains}>
        <p className={style.childWrap}>Chains</p>
        {openCLick
          ?
          <di></di>
          :
          <div className={style.childWrapCast}>
            <div className={style.otherWrap}>
              <img className={style.moneyWrap} src='https://opensea.io/static/images/logos/ethereum.png' />
              <p className={style.titleCost}>Ethereum</p>
            </div>
            <div className={style.otherWrap}>
              <img className={style.moneyWrap} src='https://opensea.io/static/images/logos/polygon.svg' />
              <p className={style.titleCost}>Polygon</p>
            </div>
            <div className={style.otherWrap}>
              <img className={style.moneyWrap} src='https://opensea.io/static/images/logos/klaytn.png' />
              <p className={style.titleCost}>Klaytn</p>
            </div>

          </div>
        }
      </div>



    </div>
  )
}

export default ActivityFilter