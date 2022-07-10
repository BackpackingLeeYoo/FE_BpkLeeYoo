import React, { Suspense } from "react";

//Redux
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//css, library, package
import ScrollToTop from "./ScrollToTop";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

//page
import Spinner from "./Spinner";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";
import LoginInfo from "../pages/LoginInfo";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:820px)",
  });

  if (isMobile) {
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Suspense fallback={<Spinner type="page" />}>
            <Wrapper>
              <ScrollToTop />
              <Route path="/" exact component={Mypage} />
              <Route path="/login" exact component={Login} />
              <Route path="/loginInfo" exact component={LoginInfo} />
            </Wrapper>
          </Suspense>
        </ConnectedRouter>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h1>모바일에서만 이용 가능합니다.</h1>
    </React.Fragment>
  );
}

//Footer 고정
const Wrapper = styled.div`
  height: auto;
  min-height: 90vh;
`;

export default App;
