import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const style = {
  container: `flex flex-col border border `,
  wrapper: `border border cursor-pointer `,
  childWrap: `p-4 font-bold text-lg`,
  filterWrap: `border border cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  childMiniWrap: ` flex flex-wrap  items-center justify-center gap-5 p-4 `,
  buttonWrap: `border border flex flex-wrap items-center justufy-center p-2 w-[8rem] rounded-lg bg-white cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  inputWrap: ` border border p-2  rounded-lg text-[black] bg-white placeholder:text-[#8a939b]`,
  dropdownCash: `flex w-full border border cursor-pointer p-2 rounded-lg bg-white `,
  childWrapCast: `flex flex-col p-2 `,
  titleCost: `p-2`,
  otherWrap: `flex flex-wrap`,
  moneyWrap: `rounded-full flex w-8 h-8`,
  saleWrap: `flex flex-col `,
}
const AssetFilter = () => {
  return (
    <div className={style.container}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.childWrap}>
            {' '}
            <div>Status</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={style.childMiniWrap}>
              <div className={style.buttonWrap}>Buy Now</div>
              <div className={style.buttonWrap}>On Auction</div>
              <div className={style.buttonWrap}>New</div>
              <div className={style.buttonWrap}>Has Offers</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.childWrap}>
            <div>Price</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={style.childMiniWrap}>
              <div className={style.dropdownCash}>United States Dollar</div>
              <div className={style.otherWrap}>
                <input className={style.inputWrap} />
                <div>to</div>
                <input className={style.inputWrap} />
              </div>
              <div className={style.buttonWrap}>apply</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.childWrap}>
            <div>Collections</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>''</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.childWrap}>
            <div>Chains</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={style.childWrapCast}>
              <div className={style.otherWrap}>
                <img
                  className={style.moneyWrap}
                  src="https://opensea.io/static/images/logos/ethereum.png"
                />
                <div className={style.titleCost}>Ethereum</div>
              </div>
              <div className={style.otherWrap}>
                <img
                  className={style.moneyWrap}
                  src="https://opensea.io/static/images/logos/polygon.svg"
                />
                <div className={style.titleCost}>Polygon</div>
              </div>
              <div className={style.otherWrap}>
                <img
                  className={style.moneyWrap}
                  src="https://opensea.io/static/images/logos/klaytn.png"
                />
                <div className={style.titleCost}>Klaytn</div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.childWrap}>
            <div>Categories</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>''</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.childWrap}>
            <div>On Sale In</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>''</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AssetFilter
