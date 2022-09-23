import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import "./index.css";
import App from "./App";

//google oauth
import { GoogleOAuthProvider } from "@react-oauth/google";

//redux
import { Provider } from "react-redux";
import store from "./state/store";

//ContextProvider
import { ContextProvider } from "./contexts/ContextProvider";

//Date Picker
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

// //chakra ui
// import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "./utils/chakraui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="1003614733230-e43jmqg38ura9fdcru8n7nb2qknpab1l.apps.googleusercontent.com">
          <ContextProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <App />
            </MuiPickersUtilsProvider>
          </ContextProvider>
        </GoogleOAuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  },
});