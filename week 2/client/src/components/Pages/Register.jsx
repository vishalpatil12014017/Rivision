import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerfail, registersucces } from '../../store/Auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
function Register() {
    const [formdata, setFormdata] = useState({})
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
    console.log(formdata);
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3535/SIGNUP', {
            ...formdata
        })
            .then(function (response) {
                if (response.data.error == true) {
                    dispatch(registerfail(response.data.message))
                    alert("Registration failed, user already exists")
                    history.replace("/register")
                    setFormdata("")

                } else {
                    dispatch(registersucces(response.data.message))
                    localStorage.setItem("Token", "vishal")
                    localStorage.setItem("isAuth", true)
                    alert("Registration Success")
                }
            })

    };
    // console.log();
    if (localStorage.getItem("isAuthAdmin")!="true") {
        return <Redirect to="/login"></Redirect>
    }
    return (
        <div className="container p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "800px", margin: "auto", borderRadius: "15px" }}>
            <h1 className="pb-3">Add Student Here</h1>
            <form >
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1" name="name" onChange={handleChange} />
                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="city" onChange={handleChange} />
                    </div>
                    <div className="col-6">
                        <label for="exampleInputPassword1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" name="age" onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputEmail1" className="form-label">Education</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="education" onChange={handleChange} />
                    </div>

                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputPassword1" className="form-label">Gender</label>
                        <select className="form-select" aria-label="Default select example" name="gender" onChange={handleChange} >
                            <option selected></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className=" col-6">
                        <label className="form-label">Mobile</label>
                        <input type="number" className="form-control" name="mobile" onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={

                    handlesubmit






                }>Submit</button>
            </form>
        </div>
    )
}

export default Register
