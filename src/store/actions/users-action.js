import React from "react";
import { useTypes } from "../../hooks/useTypes";

export const UsersAction = () => dispatch => {

    const {
        FETCH_USER_START,
        FETCH_USER_SUCCESS,
        FETCH_USER_FAILED,
        FETCH_USER_STOP
    } = useTypes();

    dispatch({
        type: FETCH_USER_START
    })

    fetch("", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(res => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(e => {
        dispatch({
            type: FETCH_USER_FAILED,
            msg: e.getMessage()
        })
    })
}