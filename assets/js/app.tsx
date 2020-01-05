import '../css/app.css';

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import configureStore from './store/configureStore'
import { getAllGroups } from './actions/GroupActions'
import Root from './Root'

const store = configureStore()
store.dispatch(getAllGroups())

ReactDOM.render(<Root store={store} />, document.getElementById('react-app'))
