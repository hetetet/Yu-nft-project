import React from 'react'
import useSWR from 'swr'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PriceDropButton from './PriceDropButton'
import InfoCard from './InfoCard'
import { log } from '../../../../utils/log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT
const apiKey = process.env.APIKEY

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

const style = {
  container: `flex flex-col p-8`,
  wrapper: `flex `,
  searchBar: `flex flex-1 h-11 w-[60vw] items-center bg-[#fffff] rounded-lg border-solid border `,
  searchIcon: `text-[#8a939b] font-bold text-lg`,
  searchInput: ` w-full border-0 bg-transparent outline-0  ring-0 px-2 pl-0 text-[black] placeholder:text-[#8a939b]`,
  buttomWrapper: `border border p-2 px-6 rounded-lg text-black`,
  searchButtonWrap: `flex items-center`,
  iconWrapper: `flex border boder rounded-lg justify-center items-center`,
  childIconWrap: `border border w-11 p-2 cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childbuttomWrapper: `cursor-pointer h-8 w-[10rem] flex items-center `,
}

interface Params {
  slug: string | string[]
}

const ItemsList = ({ slug }: Params) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const action = 'api/v1/assets'
  const url = `${apiRoot}/${action}?collection_slug=${slug}`

  const headers = {
    'X-API-KEY': apiKey,
  }

  const { data, error } = useSWR([url, headers], fetcher)

  if (!data) {
    return <>Loading...</>
  }
  log('assets data: ', data.assets)

  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={style.container}>
      <div className={style.searchButtonWrap}>
        <div className={style.searchBar}>
          <div className={style.searchIcon}>{/* <AiOutlineSearch /> */}</div>
          <input
            className={style.searchInput}
            placeholder="Search items, collections, and accounts"
          />
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <div className={style.buttomWrapper}>Single Items</div>
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
              <p className={style.childbuttomWrapper}>All items</p>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <p className={style.childbuttomWrapper}>Bundles</p>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <PriceDropButton />
        </div>
        <div className={style.iconWrapper}>
          <div className={style.childIconWrap}>
            <img src="https://cdn1.iconfinder.com/data/icons/ios-web-user-interface-vol-6-1/50/263-512.png" />
          </div>
          <div className={style.childIconWrap}>
            <img src="https://www.svgrepo.com/show/42113/keyboard-buttons-or-visualization-button-of-nine-squares.svg" />
          </div>
        </div>
      </div>
      <div>
        {data?.assets.map((value: any, index: number) => (
          <InfoCard key={index} value={value} />
        ))}
      </div>
      {error ? <p style={{ color: 'red' }}>{error.message}</p> : null}
    </div>
  )
}

export default ItemsList
