import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function Addcontest() {
    const [formdata, setFormdata] = useState({})
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
        axios.post('http://localhost:3535/contest', {
            ...formdata
        })
            .then(function (response) {
                console.log(response);
                // if (response.data.error == true) {
                //     setFormdata("")

                // } else {
                //     alert("contest Successfully added")
                //     setFormdata("")

                // }
            })

    };
    return (
        <div className="container p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "800px", margin: "auto", borderRadius: "15px" }}>
            <h1 className="pb-3">Add Contest Here</h1>
            <form >
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Batch" aria-label="Username" aria-describedby="basic-addon1" name="batch" onChange={handleChange} />
                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputEmail1" className="form-label">Instructor</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="instructor" onChange={handleChange} />
                    </div>
                    <div className="col-6">
                        <label for="exampleInputPassword1" className="form-label">Time</label>
                        <input type="time" className="form-control" id="exampleInputPassword1" name="time" onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputPassword1" className="form-label">date</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" name="date" onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={handleChange} />
                    </div>

                </div>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label for="exampleInputPassword1" className="form-label">Type</label>
                        <select className="form-select" aria-label="Default select example" name="type" onChange={handleChange} >
                            <option selected></option>
                            <option value="DSA">DSA</option>
                            <option value="Coding">Coding</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={
                    handlesubmit
                }>Submit</button>
            </form>
        </div>
    )
}

export default Addcontest
