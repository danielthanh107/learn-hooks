import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Layout from './components/Layout/Layout'
import Login from './components/Login'
import User from './components/User'

export default (
  <Router>
    <Switch>
      <Layout>
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={User} />
      </Layout>
    </Switch>
  </Router>
)