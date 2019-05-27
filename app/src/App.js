import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Login from "./pages/login";
import Chat from "./pages/chat";

import "./styles/reset.css";

class App extends Component {
    render() {        
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/chat" component={Chat} />
                    <Route path="*" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;