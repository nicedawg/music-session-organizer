import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Typography } from '@material-ui/core'

const MyMenu: React.FC = (props) => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography color="inherit" variant="h6">
            Home
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default MyMenu