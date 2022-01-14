import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import List from './List'
function Contest() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [new1, setnew1] = useState(0)
    useEffect(() => {
        handleAdd()
    }, [page])
    const handleAdd = async () => {
        const { data } = await axios.get(`http://localhost:3535/contest?page=${page}&size=4`, {
           
        })
        setData(data.lectures)
        setnew1(1)
    };
    const handleurl = async (e) => {
        console.log(e.target.value);  
        if (e.target.name === "date") {
            var ans=e.target.value
            console.log('ans:', ans)
            const { data } = await axios.get(`http://localhost:3535/contest?page=${page}&size=6`, {
           
            })
            let res1 = data.lectures.filter(e => e.date <= ans)
            console.log(res1);
            setData(res1)
        }
        else {
            var ans=e.target.value
            console.log('ans:', ans)
            const { data } = await axios.get(`http://localhost:3535/contest?page=${page}&size=20`, {
           
            })
            if(ans=="All"){
                setData(data.lectures)
            }else{
                let res1 = data.lectures.filter(e => e.type == ans)
                setData(res1)
            }
           
        }

    };
    if (localStorage.getItem("isAuth")!="true") {
        return <Redirect to="/login"></Redirect>
    }
    console.log(data.length);
    return (
        <>
            <div className="row container p-4 m-auto mt-4" style={{ backgroundColor: "rgb(114, 114, 114)" }}>
                <div className="col-md-6">
                    <label for="inputState" className="form-label">Filter By Type</label>
                    <select id="inputState" className="form-select" onChange={handleurl} required name="type">
                        <option selected value="All">All</option>
                        <option value="DSA">DSA</option>
                        <option value="Coding">Coding</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label for="inputState" className="form-label">Filter By Date of submission</label>
                    <input type="date" className="form-control" placeholder="date" aria-label="date" onChange={handleurl} aria-describedby="basic-addon1" name='date' />
                </div>
            </div>

            {
                data.map((e) => (
                    <List data={e} key={e._id}></List>
                ))
            }
            <div className="text-center m-auto mt-3" role="group" aria-label="Basic mixed styles example">
                <button disabled={page ==0 ? true : false} type="button" className="btn btn-danger px-3" onClick={() => {
                    setPage(0 <= (page - 1))
                }}>Priv</button>
                <button disabled={data?.length < 4 ? true : false}  type="button" className="btn btn-success px-3" onClick={() => {
                    setPage((page + 1))
                }}>Next</button>
            </div>

        </>
    )
}
export default Contest
