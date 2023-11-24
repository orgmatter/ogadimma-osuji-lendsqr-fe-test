import React from "react";
import { useTypes } from "../../../hooks/useTypes";
import { state } from "../../states";

export default function LoginReducer(initialState = state.auth, action) {

    const {
        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILED,
        LOGIN_STOP
    } = useTypes();

    switch(action.type) {
        case LOGIN_START:
            return {
                ...state.auth,
                status: "login_start"
            }
        case LOGIN_SUCCESS:
            return {
                ...state.auth,
                status: "login_success"
            }
        case LOGIN_FAILED:
            return {
                ...state.auth,
                status: "login_failed",
                msg: action.msg
            }
        default:
            return {
                ...initialState
            }
    }
}