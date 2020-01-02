
import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import GroupList from '../components/GroupList'
import Typography from '@material-ui/core/Typography';

const Groups: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Typography variant="h4">Groups</Typography>
      <GroupList groups={groups} />
    </>
  );
};

export default Groups
