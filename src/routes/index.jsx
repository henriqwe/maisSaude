import React from 'react'
import { BrowserRouter, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import {Imc} from "../pages/Imc"
import { PageNotFound } from "../pages/PageNotFound"
import RouterWapper from "./Router";

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <RouterWapper exact path="/" component={Login} />
        <RouterWapper exact path="/register" component={Register} />
        <RouterWapper exact isPrivate={true} path="/dashboard" component={Dashboard} />
        <RouterWapper exact isPrivate={true} path="/imc" component={Imc} />
        <RouterWapper exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
