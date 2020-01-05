import GroupList from './GroupList'
import { getGroups } from '../../actions/GroupActions'
import React from 'react';
import { connect } from 'react-redux';

class GroupListContainer extends React.Component {
  constructor(props: any) {
    super(props)

    props.store.dispatch(getGroups())
  }

  render() {
    return <GroupList {...this.state} />
  }
}

const mapStateToProps = (state: any) => {
  console.log("in mapState, state: %s", JSON.stringify(state))
  return {
    groups: state.groupState.groups
  }
}

const mapDispatchToProps = (dispatch: any) => {
  console.log("in mapDispatch")
  return {
    onGetGroups: () => { dispatch(getGroups()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)