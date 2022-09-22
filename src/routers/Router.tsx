import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../pages/Error";
import MyPage from "../pages/MyPage";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Kakao from "../components/signIn/Kakao";
import MenuBar from "./MenuBar";
import { getCookie } from "../servers/cookies";
import { instance } from "../servers/axios";
import { useSignInCheck } from "../api/userQuery";
import Map from "../pages/Location";

const Router = () => {
  const token = getCookie("accessToken");
  const { data } = useSignInCheck();
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Helmet>
          <title>백패킹의 이유</title>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/auth/kakao/callback" element={<Kakao />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <MenuBar />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Router;
