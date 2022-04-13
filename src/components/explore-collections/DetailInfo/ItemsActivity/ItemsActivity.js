import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BodyPart from '../bodyPart';
import ActivityPage from '../../Activity/activityPage';

const style ={
    container:`flex flex-col   items-center `,
    wrapper:`flex  border-2 border`,
    activeWrap:`flex`,
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ItemsActivityPage() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <Box>
    <div className={style.container}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Items" {...a11yProps(0)} />
          <Tab label="Activity" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
   
        <div className={style.wrapper}>
      <TabPanel value={value} index={0}>
        <BodyPart />
      </TabPanel>
      </div>
        <div className={style.activeWrap}>
      <TabPanel value={value} index={1}>
       <ActivityPage />
      </TabPanel>
        </div>
      </div>
    </Box>
   
  );
}