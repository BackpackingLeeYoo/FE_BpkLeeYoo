import React, { Suspense } from "react";

//Redux
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//css, library, package
import ScrollToTop from "./ScrollToTop";
import styled from "styled-components";
import "./App.css";

//page
import Spinner from "./Spinner";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Suspense fallback={<Spinner type="page" />}>
          <Wrapper>
            <ScrollToTop />
            <Route path="/" exact component={Mypage} />
            <Route path="/login" exact component={Login} />
          </Wrapper>
        </Suspense>
      </ConnectedRouter>
    </React.Fragment>
  );
}

//Footer 고정
const Wrapper = styled.div`
  height: auto;
  min-height: 90vh;
`;

export default App;
