import React from 'react';
import { TabsBar } from './style';
import Tab from '../Tab/Tab';

export default function Tabs({ setCurrentActive, currentActive }) {
  const TABS_QUANTITY = 6;
  let tabs = new Array();
  for (let i = 1; i <= TABS_QUANTITY; i++) {
    tabs.push(
      <Tab onClick={setCurrentActive} index={i} currentActive={currentActive} />
    );
  }
  return <TabsBar>{tabs}</TabsBar>;
}
