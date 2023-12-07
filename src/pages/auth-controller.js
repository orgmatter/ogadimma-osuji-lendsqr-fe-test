import React, {} from "react";
import DashboardPage from "./DashboardPage";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function AuthController(props) {

    const { isLogin } = useAuth();
    
    return !isLogin()? (<DashboardPage {...props} />):(<Navigate replace to="/" />)
}