import React from "react";
import { useTypes } from "../../../hooks/useTypes";
import useAuth from "../../../hooks/useAuth";
import { authDummy as AUTH_DUMMY } from "../../dummy-data/auth-dummy";

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

        try {
            const admin = AUTH_DUMMY.find(auth => auth.email === email && auth.password === password);
            if(Object.keys(admin).length > 0) {
                login(admin);
                dispatch({
                    type: LOGIN_SUCCESS
                })
            }
        }catch(e) {
            Object.keys(e).length === 0 ?
            dispatch({
                type: LOGIN_CREDENTIALS_FAILED,
                msg: ""
            }):
            dispatch({
                type: LOGIN_FAILED,
                msg: ""
            })
        }
    }
}