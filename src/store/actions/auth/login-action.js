import React from "react";
import { useTypes } from "../../../hooks/useTypes";
import useAuth from "../../../hooks/useAuth";

export const LoginAction = (params) => {

    const {
        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILED,
        LOGIN_CREDENTIALS_FAILED,
        LOGIN_STOP
    } = useTypes();

    const { login } = useAuth();

    return (dispatch) => {

        const { email, password } = params;
    
        dispatch({
            type: LOGIN_START
        })
    
        fetch("https://8cdb4d4ccf7b4659975655ecf5dc7820.api.mockbin.io/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(res => {
            const admin = res.admin.find(admin => admin.email === email && admin.password === password);
            if(Object.keys(admin).length > 0) {
                login(admin);
                dispatch({
                    type: LOGIN_SUCCESS
                })
            }
        })
        .catch(e => {
            Object.keys(e).length === 0 ?
            dispatch({
                type: LOGIN_CREDENTIALS_FAILED,
                msg: ""
            }):
            dispatch({
                type: LOGIN_FAILED,
                msg: ""
            })
        })
    }
}