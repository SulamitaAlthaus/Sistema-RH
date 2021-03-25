import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { isAuthenticated } from "../service/auth";

import Login from "../view/Login";
import Home from "../view/Home";
import Register from "../view/Register";
import Building from "../view/index.js";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/building " component={Building} />
        </Switch>
    </BrowserRouter>
);

export default Routes;