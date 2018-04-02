import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import rootStore from "./store/store";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Contacts from "./components/contacts/contacts";
import ContactDetails from "./components/contact-details/contact-details";
import "./App.css";

const Root = () => (
  <BrowserRouter>
    <Provider store={rootStore}>
      <MuiThemeProvider>
        <Switch>
          <Route path={`/details`} component={ContactDetails} />
          <Route component={Contacts} />
        </Switch>
      </MuiThemeProvider>
    </Provider>
  </BrowserRouter>
);

render(<Root />, document.getElementById("root"));
