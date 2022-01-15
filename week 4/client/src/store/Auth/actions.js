import {  LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes.js"

export const loginsucces = (Token) => {
    return {
        type: LOGIN_SUCCESS,
        payload:Token,
    }
}
export const loginfail = (err) => {
    return {
        type: LOGIN_FAIL,
        payload: err,
    }
}


