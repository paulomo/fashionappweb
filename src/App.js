import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import { appTheme } from "../src/components/theme/apptheme";

import store from "./store/store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AppContext from "./AppContext";
import { RouteConfig } from "./common/navigation/routeConfig";
library.add(far, fas);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouteConfig />
      </Router>
    </Provider>
  );
}

export default App;
