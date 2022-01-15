import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import List from './List'
function Home() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [disable, setdisable] = useState(0)
    useEffect(() => {
        handleAdd()
    }, [page])
    const handleAdd = async () => {
        const { data } = await axios.get(`http://localhost:3535/artists?page=${page}&size=4`, {

        })
        setData(data.artist)
        setdisable(data.totalPages)
        console.log(data);
    };
    const handleurl = async (e) => {
        console.log(e.target.value);
        if (e.target.name === "type") {
            var ans = e.target.value
            const { data } = await axios.get(`http://localhost:3535/artists?page=${page}&size=4`, {

            })
            let res1 = data.artist.filter(e => e.albums[0].genere == ans)
            console.log(res1);
            setData(res1)
        }
        else if(e.target.name=="year") {
            var ans = e.target.value
            if (ans.length==4) {
                const { data } = await axios.get(`http://localhost:3535/artists?page=${page}&size=4`, {

            })
            let res1 = data.artist.filter(e => e.albums[0].year >= ans)
            setData(res1)
            }
        }else{
            var ans = e.target.value
            if (ans.length>=4) {
                const { data } = await axios.get(`http://localhost:3535/artists?page=${page}&size=4`, {

            })
            let res1 = data.artist.filter(e => e.albums[0].name === ans)
            setData(res1)
            }
        }

    };
    // if (localStorage.getItem("isAuth")!="true") {
    //     return <Redirect to="/login"></Redirect>
    // }
    console.log(data.length);
    return (
        <>
            <div className="row container p-4 m-auto mt-4" >
                <div className="col-md-4">
                    <label for="inputState " className="form-label text-white"  >Filter By Type</label >
                    <select id="inputState" className="form-select" onChange={handleurl} required name="type">
                        <option selected value="Genre">All</option>
                        <option value="Hip-Hop/rap">Hip-Hop/rap</option>
                        <option value="Indian pop">Indian pop</option>
                        <option value="Soundtrack">Soundtrack</option>
                        <option value="Classical music">Classical music</option>
                        <option value="Filmi">Filmi</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label for="inputState" className="form-label text-white">Sort By Year</label>
                    <input type="number" className="form-control" placeholder="year" aria-label="year" onChange={handleurl} aria-describedby="basic-addon1" name='year' />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label text-white">Filter By Album Name</label>
                    <input type="text" className="form-control" placeholder="text" aria-label="text" onChange={handleurl} aria-describedby="basic-addon1" name='byname' />
                </div>
            </div>
            <div style={{ padding: "4%", paddingTop: "1%", paddingBottom: "1%" }}>
                {/* <h1 className='pt-3' style={{ fontSize: "20px", color: "white" }}>Stream For Free Now<Link to="/showall" className='float-end pt-0 hov' style={{ color: "#838991", fontSize: "16px", textDecoration: "none" }}>View All</Link></h1> */}
                <div className="row">


                    <List data={data}></List>

                </div>
            </div>
            <div className="text-center m-auto mt-3" role="group" aria-label="Basic mixed styles example">


                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <button disabled={page == 1 ? true : false} type="button" className="btn btn-danger px-3" onClick={() => {
                                setPage((page - 1))
                            }}>Priv</button>
                        </li>
                        <li className="page-item"><a className="page-link" onClick={() => {
                            setPage((page))
                        }}>{page}</a></li>
                        <li className="page-item"><a className="page-link"
                            onClick={() => {
                                setPage((page + 1))
                            }}>{page + 1}</a></li>
                        <li className="page-item"><a className="page-link"
                            onClick={() => {
                                setPage((page + 2))
                            }}>{page + 2}</a></li>
                        <li className="page-item">
                            {/* disabled={data?.length < 4 ? true : false} */}
                            <button type="button" disabled={page == disable ? true : false} className="btn btn-success px-3" onClick={() => {
                                setPage((page + 1))
                            }}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}
export default Home
