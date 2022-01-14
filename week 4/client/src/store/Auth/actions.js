import {  REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes.js"

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
export const registersucces = (Token) => {
    return {
        type: REGISTER_SUCCESS,
        payload:Token,
    }
}
export const registerfail = (err) => {
    return {
        type: REGISTER_FAIL,
        payload: err,
    }
}

