import {LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes.js"
const init = { 
    isAuth:false || localStorage.getItem("isAuth"), 
    Token:"" || localStorage.getItem("Token")
 }
export const Auth = (state=init, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
               isAuth:true,
               Token:payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuth:false,
                Token:""
            }
        default:
            return state
    }

}
