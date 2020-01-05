import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { IAppState } from './reducers'

// TODO: move components here: import App from './components/App'
import Header from './components/Header'
import Main from './components/Main'
import Dashboard from './pages'
import Groups from './pages/groups'
import GroupsNew from './pages/groups/new'

interface IProps {
  store: Store<IAppState>
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/app" component={Dashboard} />
            <Route exact path="/app/groups" component={Groups} />
            <Route exact path="/app/groups/new" component={GroupsNew} />
          </Switch>
        </Main>
      </Router>
    </Provider>
  )
}

export default Root;
