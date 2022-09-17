import React from "react";
import Router from "./routers/Router";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  );
};

export default App;
