import React from "react";
import Router from "./routers/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./styles/font.css";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="md:hidden">
        <Router />
      </div>

      <div className="hidden h-screen w-screen items-center justify-center text-40 font-black md:flex">
        모바일에서 이용해주세요
      </div>
    </React.Fragment>
  );
};

export default App;
