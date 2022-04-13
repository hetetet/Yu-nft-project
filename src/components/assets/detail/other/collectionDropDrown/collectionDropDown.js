import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Controller from './controller'

const style = {
  container: `flex flex-col mt-10 justify-center items-center`,
  titleWrap: `flex items-center text-xl font-bold h-[3rem] `,
  wrapper: ` flex flex-col  w-[72rem]`,
}

export default function CollectionDropDown({ value }) {
  return (
    <div className={style.container}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.titleWrap}>
            More From This Collection
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.wrapper}>
            <Controller />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
