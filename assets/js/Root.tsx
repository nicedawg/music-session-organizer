import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Dashboard from './pages'
import Groups from './pages/groups'

export default class Root extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <Router>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/app" component={Dashboard} />
              <Route exact path="/app/groups" component={Groups} />
            </Switch>
          </Main>
        </Router>
      </>
    )
  }
}

