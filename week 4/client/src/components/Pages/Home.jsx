import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import List from './List'
const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}
function Home() {
    const query = useQuery()
    const [data, setData] = useState([])
    const [page, setPage] = useState(+query.get("page")||1)
    const history = useHistory()
    const [disable, setdisable] = useState(0)
    const [toggle, setToggle] = useState(false);
    const [btngenre, setBtngenre] = useState(false);
    const [btnsort, setBtnsort] = useState(false)
    const [btnName, setBtnName] = useState(false)
    const [genre, setGenre] = useState();
    const [sort, setSort] = useState();
    const [name, setName] = useState();
    const baseUrl = "http://localhost:3535/albums"
    useEffect(() => {
        let x = window.location.search
        console.log(x)
        let newUrl = baseUrl + x;
        console.log(newUrl)
        handleAdd(newUrl)
    }, [page, toggle, genre])

    // useEffect(() => {
    //     if (toggle) {
    //         return
    //     }
    //     handleAdd()
    // }, [page])
    const handleAdd = async (url) => {
        const {data} = await axios.get(url)
        setData(data.album)
        setdisable(data.totalPages)
        console.log("data",data);
    };
    const handleurl = async (e) => {
        const { name, value } = e.target
        // if (name === "type") {
        //     history.push(`?page=${page}&size=${4}&genere=${value}`)
        //     settoggle(!toggle)
        //     settogglegenre(value)
        // } 
        if ((btnsort && btngenre) || (btngenre && btnName) || (btnName && btnsort)) {
            if (name === "byname") {
                history.push(`home?page=${page}&size=${4}&sort=${sort}&genre=${genre}&byname=${value}`)
                setToggle(!toggle);
                setBtnName(true);
                setName(value)
            } else if (name === "type") {
                history.push(`home?page=${page}&size=${4}&sort=${sort}&genre=${value}&byname=${name}`)
                setToggle(!toggle)
                setBtngenre(true)
                setGenre(value)
            } else if (name === "sort") {
                history.push(`home?page=${page}&size=${4}&sort=${value}&genre=${genre}&byname=${name}`)
                setToggle(!toggle)
                setBtnsort(true)
                setSort(value)
            }
        }
        else if (name === "type" && btnsort === false && btnName === false) {
            history.push(`home?page=${page}&size=${4}&genre=${value}`)
            setToggle(!toggle)
            setBtngenre(true)
            setGenre(value)
        } else if (name === "year" && btngenre === false && btnName === false) {
            history.push(`home?page=${page}&size=${4}&sort=${value}`)
            setToggle(!toggle)
            setBtnsort(true)
            setSort(value)
        } else if (name === "byname" && btngenre === false && btnsort === false) {
            if (value.length >= 4) {
                history.push(`home?page=${page}&size=${4}&byname=${value}`)
                setToggle(!toggle)
                setBtnName(true)
                setName(value)
            }
        } else if (btnsort && name === "type" && btnName === false) {
            history.push(`home?page=${page}&size=${4}&sort=${sort}&genre=${value}`)
            setToggle(!toggle)
            setBtngenre(true)
            setGenre(value)
        } else if (btnsort && name === "byname" && btngenre === false) {
            history.push(`home?page=${page}&size=${4}&sort=${sort}&byname=${value}`)
            setToggle(!toggle);
            setBtnName(true);
            setName(value)
        } else if (btngenre && name === "sort" && btnName === false) {
            history.push(`home?page=${page}&size=${4}&genre=${genre}&sort=${value}`)
            setToggle(!toggle);
            setBtnsort(true);
            setSort(value)
        } else if (btngenre && name === "byname" && btnsort === false) {
            history.push(`home?page=${page}&size=${4}&genre=${genre}&byname=${value}`)
            setToggle(!toggle)
            setBtnName(true)
            setName(value)
        } else if (btnName && name === "type" && btnsort === false) {
            history.push(`home?page=${page}&size=${4}&byname=${name}&genre=${value}`)
            setToggle(!toggle)
            setBtngenre(true)
            setGenre(value)
        } else if (btnName && name === "sort" && btngenre === false) {
            history.push(`home?page=${page}&size=${4}&byname=${name}&sort=${value}`)
            setToggle(!toggle);
            setBtnsort(true);
            setSort(value)
        }

        // console.log(e.target.value);
        // if (e.target.name === "type") {
        //     var ans = e.target.value
        //     const { data } = await axios.get(`http://localhost:3535/artistshome?page=${page}&size=${4}`, {
        //     })
        //     let res1 = data.artist.filter(e => e.albums[0].genere == ans)
        //     console.log(res1);
        //     setData(res1)
        // }
        // else if (e.target.name == "year") {
        //     var ans = e.target.value
        //     if (ans.length == 4) {
        //         const { data } = await axios.get(`http://localhost:3535/artists?sort=${ans}&page=${page}&size=${4}`, {

        //         })
        //         setData(data)
        //     }
        // } else {
        //     var ans = e.target.value
        //     if (ans.length >= 4) {
        //         const { data } = await axios.get(`http://localhost:3535/artistshome?page=${page}&size=4`, {

        //         })
        //         let res1 = data.artist.filter(e => e.albums[0].name === ans)
        //         setData(res1)
        //     }
        // }

    };
    query.set("page", page.toString())
    const handlepagination = (event, value) => {
        setPage(value)
        if(btnsort && btngenre && btnName){
            history.push(`home?page=${value}&size=${4}&sort=${sort}&genre=${genre}&byname=${name}`)
        }
        else if (btngenre && btnsort === false && btnName === false) {
            history.push(`home?page=${value}&size=${4}&genre=${genre}`)
        } else if (btnsort && btngenre === false && btnName === false) {
            history.push(`home?page=${value}&size=${4}&sort=${sort}`)
        } else if (btnName && btnsort === false && btngenre === false) {
            history.push(`home?page=${value}&size=${4}&byname=${name}`)
        } else if (btnsort && btngenre && btnName === false) {
            history.push(`home?page=${value}&size=${4}&sort=${sort}&genre=${genre}`)
        }  else if (btnName && btngenre && btnsort === false) {
            history.push(`home?page=${value}&size=${4}&genre=${genre}&byname=${name}`)
        } else if (btnsort && btngenre === false && btnName) {
            history.push(`home?page=${value}&size=${4}&sort=${sort}&byname=${name}`)
        }
        else {
            history.push(`home?page=${value}&size=4`);
        }
       
    };

    return (
        <>
            <div className="row container p-4 m-auto mt-4" >
                <div className="col-md-4">
                    <label for="inputState " className="form-label text-white"  >Filter By Type</label >
                    <select id="inputState" className="form-select" onChange={handleurl} required name="type">
                        <option selected value="all">All</option>
                        <option value="Hip-Hop/rap">Hip-Hop/rap</option>
                        <option value="Indian pop">Indian pop</option>
                        <option value="Soundtrack">Soundtrack</option>
                        <option value="Classical music">Classical music</option>
                        <option value="Filmi">Filmi</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label for="inputState" className="form-label text-white">Sort By Year</label>
                    <select id="inputState" className="form-select" onChange={handleurl} required name="year">
                        <option selected value="Genre">All</option>
                        <option value="-1">Letest</option>
                        <option value="1">Oldest</option>
                    </select>
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
                <div className='m-auto' style={{ maxWidth: "380px", color: "white" }}>
                    <Stack spacing={2} className='m-auto bg-white p-2' style={{ color: "white", borderRadius: "20px" }}>
                        <Pagination className='m-auto' count={disable} color="primary" defaultPage={+query.get("page")} onChange={
                            handlepagination
                        } />
                    </Stack>
                </div>

            </div>

        </>
    )
}
export default Home
