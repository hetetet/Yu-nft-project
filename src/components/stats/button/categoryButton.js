import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


const style = {
    cotainer:`flex flex-col w-[12rem] h-[3rem] border border text-black font-bold rounded-lg`,
    wrapper: `flex flex-col w-[12rem] justify-center items-center text-black font-medium  `
}

export default function CategoryButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <div className={style.cotainer}>
        <Button  className={style.cotainer}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         New
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList 
                    className={style.wrapper}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose} className={style.wrapper}>All categories</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>New</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Art</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Collectibles</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Domain Names</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Music</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Photography</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Sports</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Trading Cards</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Utility</MenuItem>
                    <MenuItem onClick={handleClose} className={style.wrapper}>Virtual Worlds</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
      </div>
    </Stack>
  );
}