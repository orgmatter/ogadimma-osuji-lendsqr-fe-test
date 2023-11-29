import React from "react";
import { useTypes } from "../../hooks/useTypes";

export const UsersAction = () => {

    const {
        FETCH_USER_START,
        FETCH_USER_SUCCESS,
        FETCH_USER_FAILED,
        FETCH_USER_STOP
    } = useTypes();

    return (dispatch) => {

        dispatch({
            type: FETCH_USER_START
        })
    
        fetch("https://run.mocky.io/v3/2788d698-656e-4f30-95f9-e882beba2394", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(res => {
            console.log("data: ", res.data)
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(e => {
            // console.log("e: ", e)
            dispatch({
                type: FETCH_USER_FAILED,
                msg: ""
            })
        })
    }
}