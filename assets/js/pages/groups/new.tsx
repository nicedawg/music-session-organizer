import * as React from 'react'
import { Link } from 'react-router-dom'
import GroupNew from '../../components/GroupNew'

export default class GroupsNew extends React.Component {
  render() {
    return(
      <>
        <h4>Groups</h4>
        <GroupNew />
        <Link to="/app/groups/new">Add New Group</Link>
      </>
    );
  }
};