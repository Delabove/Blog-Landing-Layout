import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import categories from '../components/popularPostData';

const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration:'none',
  },
  menuHeader: {
    paddingLeft: '30px'
  }
};
class DataTreeView extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
handleClick( item ) {
    this.setState( prevState => (
      { [ item ]: !prevState[ item ] }
    ) )
  }
// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
handler( categories  ) {
    const { classes } = this.props
    const { state } = this
return categories.map( ( category ) => {
      if ( !category.children ) {
        return (
          <div key={ category.subject }>
            <ListItem
              button
              key={ category.subject }>
              <Link
                to={ category.post }
                className={ classes.links }>
                <ListItemText
                  inset
                  primary={ category.title }
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={ category.name }>
          <ListItem
            button
            onClick={ () => this.handleClick( category.subject ) }>
            <ListItemText
              inset
              primary={ category.subject } />
            { state[ category.subject ] ?
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse
            in={ state[ category.subject] }
            timeout="auto"
            unmountOnExit
          >
            { this.handler( category.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    const { classes, drawerOpen, menuOptions } = this.props
    return (
      <div className={classes.list}>
        <Drawer
          variant="persistent"
          anchor="left"
          open
          classes={ { paper: classes.list } }>
          <div>
            <List>
              <ListItem
                key="menuHeading"
                divider
                disableGutters
              >
                <ListItemText
                className={ classes.menuHeader }
                  inset
                  primary="Nested Menu"
                />
              </ListItem>
            { this.handler( categories.data ) }
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}
export default withStyles(styles)(DataTreeView)