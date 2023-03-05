import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../pages/Error";
import MyPage from "../pages/MyPage";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Kakao from "../components/signIn/Kakao";
import MenuBar from "./MenuBar";
import Map from "../pages/Location";
import Certification from "../pages/Certification";
import { useSignInCheck } from "../api/userQuery";
import PrivateRoute from "./PrivateRouter";
import Reason from "../pages/Reason";

const Router = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Helmet>
          <title>백패킹의 이유</title>
        </Helmet>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/map"
            element={
              <PrivateRoute>
                <Map />
              </PrivateRoute>
            }
          />
          <Route
            path="/certification/:stampId"
            element={
              <PrivateRoute>
                <Certification />
              </PrivateRoute>
            }
          />
          <Route path="/reason" element={<Reason />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/auth/kakao/callback" element={<Kakao />} />
        </Routes>
        <MenuBar />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Router;
