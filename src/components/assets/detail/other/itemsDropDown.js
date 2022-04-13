import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style ={
    container: `flex flex-col mt-10 `,
    titleWrap:`flex items-center text-xl font-bold h-[3rem] `,
    wrapper:`flex flex-col`,
}


export default function ItemsDropDown() {
  return (
    <div className={style.container}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.titleWrap}>Item Activity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.wrapper} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
           
          </Typography>
        </AccordionDetails>
      </Accordion>    
    </div>
  );
}
