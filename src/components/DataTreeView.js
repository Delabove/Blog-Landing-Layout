import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from '@material-ui/core/Link'


export default function DefaultTreeView() {

  return(
<Tabs>
<TabList>
<Tab>Title 1</Tab>
<Tab>Title 2</Tab>
</TabList>

<TabList>
<Tab>Title 1</Tab>
<Tab>Title 2</Tab>
</TabList>

<TabPanel>
<Link> Link 1 </Link>
</TabPanel>
<TabPanel>
<Link> link 2 </Link>
</TabPanel>
</Tabs>
  );

}