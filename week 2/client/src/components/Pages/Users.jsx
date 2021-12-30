import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
function Users() {
    const [data, setData] = useState([])
    useEffect(() => {
        handleAdd()
    }, [])
    const handleAdd = async () => {
        const { data } = await axios.get(`http://localhost:3535/user`, {

        })
        setData(data.user)
    };
    if (localStorage.getItem("isAuthAdmin")!="true") {
        return <Redirect to="/login"></Redirect>
    }
    return (
        <div className="container p-1 px-4 pt-4">
            {
                data.map((data) => (
                    <div className="row bg-white">
                        <div className="col-2 text-center px-0" style={{ border: "1px solid red" }}>
                            <h4 className="bg-dark text-white py-2">Name</h4>
                            <h5>{data.name}</h5>
                        </div>
                        <div className="col-2 text-center px-0" style={{ border: "1px solid red" }}>
                            <h4 className="bg-dark text-white py-2">Education</h4>
                            <h5>{data.education}</h5>
                        </div>

                        <div className="col-3 text-center px-0" style={{ border: "1px solid red" }}>
                            <h4 className="bg-dark text-white py-2">Email</h4>
                            <h5>{data.email}</h5>
                        </div>
                        <div className="col-1 text-center px-0" style={{ border: "1px solid red" }}>
                            <h4 className="bg-dark text-white py-2">Age</h4>
                            <h5>{data.age}</h5>
                        </div>
                        <div className="col-2 text-center px-0" style={{ border: "1px solid red" }}>
                            <h4 className="bg-dark text-white py-2">Mobile</h4>
                            <h5>{data.mobile}</h5>
                        </div>
                       <div className="col-2 text-center px-0 bg-dark text-white py-2" style={{ border: "1px solid red" }}>
                                <h5>Delete User</h5>
                                <button className='btn-danger' onClick={async () => {
                                    const { data1 } = await axios.delete(`http://localhost:3535/user/${data._id}`, {

                                    }).then(handleAdd)
                                }}>Delete</button>
                            </div> 

                    </div>
                ))
            }
        </div>
    )
}

export default Users
