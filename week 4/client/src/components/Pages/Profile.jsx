import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Profile() {
    const [formdata, setFormdata] = useState({})
    const history = useHistory()
    const handleSubmit = async (e) => {

    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };
    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "20px" }}>
            <h1 className="text-center">Update Here</h1>
            <form onSubmit={handleSubmit}>
                <div class="input-group my-3">

                    <input type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1" name="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">url</label>
                    <input type="url" className="form-control"  name="url" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => {

                    e.preventDefault();
                    axios.patch(`http://localhost:3535/artists/${localStorage.getItem("Token")}`, {
                        name: formdata.name,
                        password: formdata.password,
                        url: formdata.url
                    })
                        .then(function (response) {
                            console.log(response);
                            // if (response.status == 200) {
                            //     dispatch(loginsucces(response.data.token))
                            //     localStorage.setItem("Token", response.data.user._id)
                            //     localStorage.setItem("isAuth", true)
                            //     alert("Login Successful")
                            //     history.push("/")
                            // } else {
                            //     dispatch(loginfail(response.data.token))
                            //     alert("Please check your email and password")
                            // }

                            // localStorage.setItem("isAuth", true)
                        })
                }

                }>Submit</button>
            </form>
        </div>
    )
}

export default Profile