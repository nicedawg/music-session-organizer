import { combineReducers } from 'redux';

import { groupReducer, IGroupState } from './groupReducer'

export interface IAppState {
  groupState: IGroupState
}

export const rootReducer = combineReducers<IAppState>({
  groupState: groupReducer,
})