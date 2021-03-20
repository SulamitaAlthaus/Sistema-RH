import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../service/auth";

import Login from "../view/Login";
import Home from "../view/Home";
import Register from "../view/Register";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default Routes;