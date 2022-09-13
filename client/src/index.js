import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

//google oauth
import { GoogleOAuthProvider } from "@react-oauth/google";

//redux
import { Provider } from "react-redux";
import store from "./state/store";

//ContextProvider
import { ContextProvider } from "./contexts/ContextProvider";

//chakra ui
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/chakraui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="1003614733230-e43jmqg38ura9fdcru8n7nb2qknpab1l.apps.googleusercontent.com">
          <ContextProvider>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          </ContextProvider>
        </GoogleOAuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
