import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles({
  root: {
    display: "flex",
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});
const getTreeItemsFromData = treeItems => {
  return treeItems.map(treeItemData => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <TreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id}
        label={treeItemData.name}
        children={children}
      />
    );
  });
};
const DataTreeView = ({ treeItems }) => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};



//       <TreeView
//       className={classes.root}
//       defaultExpanded={['3']}>
// <Tabs>
//     <TabList>
//       <Tab>Title 1</Tab>
//       <Tab>Title 2</Tab>
//     </TabList>

//     <TabList>
//       <Tab>Title 1</Tab>
//       <Tab>Title 2</Tab>
//     </TabList>

//     <TabPanel>
//       <Link> Link 1 </Link>
//     </TabPanel>
//     <TabPanel>
//       <Link> link 2 </Link>
//     </TabPanel>
//   </Tabs>



//       {renderTabs(categories)}
//     </TreeView>







  export default DataTreeView;