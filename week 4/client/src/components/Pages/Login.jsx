import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginfail, loginsucces } from '../../store/Auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Login() {
    const [formdata, setFormdata] = useState({})
    const { Token } = useSelector(store => store.Auth)
    const { error, MESSAGE } = useSelector(store => store.Register)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };

    if (Token.length != 0) {
        history.replace("/")
    }
    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "20px" }}>
            <h1 className="text-center pb-4">Login Here</h1>
            <form >
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1" name="email" onChange={handleChange} />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={async (e) => {
                        e.preventDefault();
                        await axios.post('http://localhost:3535/SIGNIN', {
                            email: formdata.email,
                        })
                            .then(function (response) {
                                if (response.data.token.length > 1) {
                                    dispatch(loginsucces(response.data.token))
                                    localStorage.setItem("Token", response.data.token)
                                    localStorage.setItem("isAuth", true)
                                    localStorage.setItem("isAuthAdmin", response.data.user.role)
                                    console.log(response.data.user.name);
                                    alert(`Welcome ${response.data.user.name} Login Successful`)

                                } else {
                                    dispatch(loginfail(response.data.message))
                                    alert("Registration failed, user already exists")
                                    history.replace("/register")
                                    setFormdata("")
                                }
                            })

                    }}>Send Token</button>
                </div>
            </form>
        </div>
    )
}
export default Login
