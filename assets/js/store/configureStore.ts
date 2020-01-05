import { applyMiddleware, createStore, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducerEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import { rootReducer, IAppState } from '../reducers'

export default function configureStore(): Store<IAppState, any> {
  const middlewares: any = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers: any = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(rootReducer, undefined, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }
  
  return store
}