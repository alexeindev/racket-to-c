import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Editor2 from './editores/EditorC';
import Editor1 from './editores/EditorRacket';
import data from '../../assets/code/condicionales.json';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar position="static" color="default" centered>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab  label="Ejemplo 1" {...a11yProps(0)} />
          <Tab label="Ejemplo 2" {...a11yProps(1)} />
          <Tab label="Ejemplo 3" {...a11yProps(2)} />
          <Tab label="Ejemplo 4" {...a11yProps(3)} />
          <Tab label="Ejemplo 5" {...a11yProps(4)} />
          <Tab label="Ejemplo 6" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
            <div className="code-container">
                <div >
                    <Editor1 code = {";this is \n;the code"} example={ 1 } />
                </div>
                <div >
                    <Editor2 code = {data[0]['1']['codigo']} outs = {data[0]['1']['out']}/>
                </div>
            </div>    
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="code-container">
                <div >
                    <Editor1/>
                </div>
                <div >
                    <Editor2 code = {"//this is \n//the code"} example={ 2 }/>
                </div>
            </div>    
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="code-container">
                <div >
                    <Editor1/>
                </div>
                <div >
                    <Editor2/>
                </div>
            </div>    
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="code-container">
                <div >
                    <Editor1/>
                </div>
                <div >
                    <Editor2/>
                </div>
            </div>    
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
            <div className="code-container">
                <div >
                    <Editor1/>
                </div>
                <div >
                    <Editor2/>
                </div>
            </div>    
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
            <div className="code-container">
                <div >
                    <Editor1/>
                </div>
                <div >
                    <Editor2/>
                </div>
            </div>    
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}