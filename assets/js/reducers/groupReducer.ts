import { Reducer } from 'redux'

import {
  GroupActions,
  GroupActionTypes,
} from '../actions/GroupActions'

export interface IGroup {
  name: string
}

export interface IGroupState {
  readonly pending: false
  readonly group: IGroup
  readonly groups: IGroup[]
  readonly error: string | null
}


const initialGroupState: IGroupState = {
  pending: false,
  group: { name: '' },
  groups: [],
  error: null,
}

export const groupReducer: Reducer<IGroupState, GroupActions> = (
  state = initialGroupState,
  action: any
) => {
  switch (action.type) {
    case GroupActionTypes.GET_ALL: {
      console.log("in reducer, action: %s", JSON.stringify(action))
      return {
        ...state,
        groups: action.groups,
      }
    }
    default:
      return state;
  }
}