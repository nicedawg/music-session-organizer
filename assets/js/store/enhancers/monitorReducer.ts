import { Action, Reducer} from 'redux'

const round = (number: number) => Math.round(number * 100) / 100

const monitorReducerEnhancer = (createStore: Function) => (
  reducer: Reducer<any, Action>,
  initialState: any, // TODO: define interface for initialState and use it here
  enhancer: Reducer<any, Action>
) => {
  const monitoredReducer = (state: any, action: Action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)
    console.log('reducer process time:', diff)
    return newState
  }
  return createStore(monitoredReducer, initialState, enhancer)
}
export default monitorReducerEnhancer