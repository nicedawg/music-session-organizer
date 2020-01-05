import * as React from 'react'
import { connect, ReactReduxContextValue } from 'react-redux';

import { GroupNew, IGroupNewProps } from './GroupNew'
import { GroupActionTypes, getGroups } from '../../actions/GroupActions'
import { IGroup } from '../../reducers/groupReducer';

export interface IGroupNewState {
  group: IGroup,
  handleChange: React.ChangeEventHandler,
  handleSubmit: React.FormEventHandler,
}

class GroupNewContainer extends React.Component {

  constructor(props: any) {
    super(props)

    this.state = {
      group: { name: '' },
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    }
  }

  handleChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("submitting value: %s", event.target.value)
  }

  handleSubmit: React.FormEventHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitting event: %s", JSON.stringify(event))
  }

  render() {
    return <GroupNew {...this.state} />
  }
};

const mapStateToProps = (state: IGroupNewState) => {
  console.log("in mapState, state: %s", JSON.stringify(state))
  return {...state}
}

const mapDispatchToProps = (dispatch: React.Dispatch<GroupActionTypes>) => {
  console.log("in mapDispatch")
  return {
    onGetGroups: () => { dispatch(getGroups()) }
  }
}

export default connect(mapStateToProps, undefined)(GroupNew)