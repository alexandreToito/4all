import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ParseProvider from "./context/Parse.jsx";

import "./App.scss";

import routes from "./routes";

function App() {
  return (
    <ParseProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={props => <route.component {...props} />}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </ParseProvider>
  );
}

export default App;
