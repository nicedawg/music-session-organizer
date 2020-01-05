import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import ApiClient from '../services/apiClient'

import { IGroup, IGroupState } from '../reducers/groupReducer'

export enum GroupActionTypes {
  GET_ALL = 'GET_ALL'
}

export interface IGroupGetAllAction {
  type: GroupActionTypes.GET_ALL
  groups: IGroup[]
}

export type GroupActions = IGroupGetAllAction

export const getAllGroups: ActionCreator<ThunkAction<Promise<any>, IGroupState, null, IGroupGetAllAction>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await apiClient.groups()
      console.log("in getAllGroups, response: %s", JSON.stringify(response))
      dispatch({
        groups: response.data.data,
        type: GroupActionTypes.GET_ALL,
      })
    } catch (err) {
      console.error(err)
    }
  }
}

const apiClient = new ApiClient()

export const FETCH_GROUPS_PENDING = 'FETCH_GROUPS_PENDING'
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS'
export const FETCH_GROUPS_ERROR = 'FETCH_GROUPS_ERROR'


export function getGroups() {
  console.log("in getGroups()")

  return (dispatch: Dispatch) => {
    console.log("gonna call apiClient.groups")
    apiClient.groups()
      .then(response => {
        dispatch(groupsSuccess(response.data))
      })
  }
}

export const groupsSuccess = (result: any) => ({
  type: 'GROUPS_SUCCESS', result
})