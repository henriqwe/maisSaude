import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { PageNotFound } from '../pages/PageNotFound'
import RouterWapper from './Router'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouterWapper exact path="/" component={Login} isPrivate={false} />
        <RouterWapper
          exact
          path="/register"
          component={Register}
          isPrivate={false}
        />
        <RouterWapper
          exact
          isPrivate={true}
          path="/dashboard"
          component={Dashboard}
        />
        <RouterWapper
          exact
          path="*"
          component={PageNotFound}
          isPrivate={false}
        />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
