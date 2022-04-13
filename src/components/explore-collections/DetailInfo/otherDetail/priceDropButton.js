import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const style = {
    container: `flex flex-col p-10`,
    wrapper: `flex`,
    searchBar: `flex flex-1 h-11  items-center bg-[#fffff] rounded-lg border-solid border `,
    searchIcon: `text-[#8a939b] font-bold text-lg`,
    searchInput: ` w-full border-0 bg-transparent outline-0  ring-0 px-2 pl-0 text-[black] placeholder:text-[#8a939b]`,
    buttomWrapper: `border border p-2 px-6 rounded-lg text-black`,
    searchButtonWrap:`flex items-center  w-[76vw]`,
    childIconWrap:`border border h-10 w-10 p-2 cursor-pointer ml-2 rounded-lg`,
    childbuttomWrapper:`cursor-pointer h-8 p-2 w-[10rem] flex items-center`,
}

const PriceDropButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <div>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    >
        <div className={style.buttomWrapper}>
            Price: Low to High
        </div>
    </Button>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
    >
       
        <MenuItem onClick={handleClose}>
        <p className={style.childbuttomWrapper}>Recently Listed </p></MenuItem>
       
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Recently Created</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Recently Sold</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Recently Received</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Ending soon</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Price: Low to High</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Price: High to Low</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Highest Last Sale</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Most Viewed</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Most Favorited</p></MenuItem>
        <MenuItem onClick={handleClose}>
             <p className={style.childbuttomWrapper}>Oldest</p></MenuItem>
    </Menu>
    </div>
  )
}

export default PriceDropButton