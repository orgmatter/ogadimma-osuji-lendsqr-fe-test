import React from "react";
import { useTypes } from "../../../hooks/useTypes";
import useAuth from "../../../hooks/useAuth";

export const LoginAction = (params) => {

    const {
        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILED,
        LOGIN_STOP
    } = useTypes();

    return dispatch => {

        const { login } = useAuth();
    
        const { email, password } = params;
    
        dispatch({
            type: LOGIN_START
        })
    
        fetch("", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(res => {
            if(email === res.data.email && password === res.data.password) {
                login(res.data);
            }
            dispatch({
                type: LOGIN_SUCCESS
            })
        })
        .catch(e => {
            dispatch({
                type: LOGIN_FAILED,
                msg: ""
            })
        })
    }
}