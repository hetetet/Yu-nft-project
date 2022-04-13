import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DoughnutChart from './Doughnut';


const style = {
  container: `flex flex-col p-8`,
  wrapper: `flex `,
  buttomWrapper: `border border flex  justify-center items-center text-lg h-12 w-[14rem] rounded-lg text-black`,
  searchButtonWrap: `flex items-center`,
  iconWrapper:`flex border boder rounded-lg justify-center items-center`,
  childIconWrap: `border border w-11 p-2 cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childbuttomWrapper: `cursor-pointer h-12 w-[14rem] flex items-center  font-bold`,

}

const Chart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.container}>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <div className={style.buttomWrapper}>
            Last 90 days
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
            <p className={style.childbuttomWrapper}> Last 7 days</p></MenuItem>
          <MenuItem onClick={handleClose}>
            <p className={style.childbuttomWrapper}>Last 14 days</p></MenuItem>
            <MenuItem onClick={handleClose}>
            <p className={style.childbuttomWrapper}> Last 30 days</p></MenuItem>
            <MenuItem onClick={handleClose}>
            <p className={style.childbuttomWrapper}> Last 60 days</p></MenuItem>
            <MenuItem onClick={handleClose}>
            <p className={style.childbuttomWrapper}> Last 90 days</p></MenuItem>
            <MenuItem onClick={handleClose}>
            <p className={style.childbuttomWrapper}> Last Year</p></MenuItem>
            <MenuItem onClick={handleClose}>
            <p className={style.childbuttomWrapper}> All Time</p></MenuItem>
        </Menu>
      </div>
    <DoughnutChart />
    </div>
  )
}

export default Chart