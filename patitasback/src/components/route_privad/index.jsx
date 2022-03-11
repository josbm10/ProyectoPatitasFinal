import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
    const isLogin = useSelector((state) => {
        return state.auth.isLogin;
    });

    // const dataUser = useSelector((state) => {
    //     return state.auth.userData;
    // });

    return isLogin? 
    (<Route path={path} exact={exact}>{children}</Route>) 
    : (
        <Redirect to="/login" />
    );
};

export default ProtectedRoute;