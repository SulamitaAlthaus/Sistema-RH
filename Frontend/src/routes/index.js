import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { isAuthenticated } from "../service/auth";

import Login from "../view/Login";
import Home from "../view/Home";
import Register from "../view/Register";
import Building from "../view/index.js";
import ListUser from "../components/ListUser";
import User from "../components/ListUser/list";
import NewUser from "../components/NewUser";



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/users" component={ListUser} />
            <Route exact path="/user/:matricula" component={User} />
            <Route exact path="/building" component={Building} />
            <Route exact path="/newuser" component={NewUser} />
        </Switch>
    </BrowserRouter>
);

export default Routes;