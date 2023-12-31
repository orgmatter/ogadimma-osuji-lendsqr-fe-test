import React from "react";
import { useTypes } from "../../hooks/useTypes";
import { mockyDemo } from "../../pages/components/Dashboard/subpages/users/mocky-demo";

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
    
        fetch("https://9799e9290dfd44798e3c139abfdb94e3.api.mockbin.io/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            console.log('resp ok: ', resp.ok)
            return resp.json()
        })
        .then(res => {
            console.log("data: ", res.data)
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(e => {
            dispatch({
                type: "FETCH_DEMO_USER_SUCCESS",
                payload: mockyDemo.users
            })
        })
    }
}