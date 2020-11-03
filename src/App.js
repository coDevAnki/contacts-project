import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { GlobalProvider } from "./context/Provider";
import routes from "./routes";

function App() {
  console.log(routes);
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(...props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
