import * as React from 'react'
import { Link } from 'react-router-dom'
import GroupList from '../components/GroupList'

export default class Groups extends React.Component {
  render() {
    return(
      <>
        <h4>Groups</h4>
        <GroupList />
        <Link to="/app/groups/new">Add New Group</Link>
      </>
    );
  }
};