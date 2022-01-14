import { REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes.js"
const init = { 
    isAuth:false  , 
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
const init1 = { 
    error:true  , 
    MESSAGE:"" || localStorage.getItem("MESSAGE")
 }
export const Register = (state=init1, { type, payload }) => {
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
               error:false,
               MESSAGE:payload
            };
        case REGISTER_FAIL:
            return {
                ...state,
                error:true,
                MESSAGE:payload
            }
        default:
            return state
    }

}