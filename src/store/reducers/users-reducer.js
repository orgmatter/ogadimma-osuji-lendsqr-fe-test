import React from "react";
import { useTypes } from "../../hooks/useTypes";
import { state } from "../states";

export default function UsersReducer(initialState = state.users, action) {

    const {
        FETCH_USER_START,
        FETCH_USER_SUCCESS,
        FETCH_USER_FAILED,
        FETCH_USER_STOP
    } = useTypes();

    switch(action.type) {
        case FETCH_USER_START:
            return {
                ...state.users,
                status: "fetch_start"
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state.users,
                status: "fetch_success",
                eventType: "initial_fetch",
                data: action.payload
            }
        case "TABLE_FILTER":
            return {
                ...state.users,
                status: "filter_success",
                eventType: "filter_btn_click",
                data: action.payload
            }
        case "TABLE_RESET":
            return {
                ...state.users,
                status: "reset_success",
                eventType: "reset_btn_click",
                data: action.payload
            }
        case FETCH_USER_FAILED:
            return {
                ...state.users,
                status: "fetch_failed",
                msg: action.msg
            }
        default:
            return {
                ...initialState
            }
    }
}