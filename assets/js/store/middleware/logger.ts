import { Store, Action } from 'redux'

// TODO: define interface for initialState and use it here for next
const logger = (store: Store) => (next: any) => (action: Action) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}
export default logger