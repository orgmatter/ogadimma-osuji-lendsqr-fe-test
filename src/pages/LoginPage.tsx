import React from "react";
import LoginComponent from "./components/Login";

export default function LoginPage() {

    return (
        <div className="login-page-cover-flex">
            <div className="login-page-cover-item">
                <LoginComponent />
            </div>
        </div>
    )
}