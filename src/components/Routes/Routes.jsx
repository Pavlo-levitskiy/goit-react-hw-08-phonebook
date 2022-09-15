import React from "react";
import authSelectors from "../../redux/authorization/auth-selectors";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import Registration from "../Registration/Registration";
import LoginView from "../Login/Login";
import ContactsView from "../ContactsView/ContactsView";

const RoutesNav = () => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLogedIn ? <UserNav /> : <AuthNav />}
      <Routes>
        <Route
          path="login"
          element={isLogedIn ? <Navigate to="/contacts" /> : <LoginView />}
        />
        <Route
          path="register"
          element={isLogedIn ? <Navigate to="/contacts" /> : <Registration />}
        />
        <Route
          path="contacts"
          element={isLogedIn ? <ContactsView /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};
export default RoutesNav;
