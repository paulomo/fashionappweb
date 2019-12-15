import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Chart } from "react-chartjs-2";
import { ThemeProvider } from "@material-ui/styles";
import validate from 'validate.js';
import validators from './common/validators/validators';

import { chartjs } from './common/helpers';
import theme from "./common/theme";
import "react-perfect-scrollbar/dist/css/styles.css";
import store from "./store/store";
import AppContext from "./AppContext";
// import { RouteConfig } from "./common/navigation/routeConfig";
import Route from './common/navigation/Route'; 

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(far, fas);

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          {/* <RouteConfig /> */}
          <Route />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
