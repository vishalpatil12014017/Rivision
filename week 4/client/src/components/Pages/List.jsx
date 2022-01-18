import play from '../Img/play.png'
import like1 from '../Img/like1.png'
import like2 from '../Img/like2.png'
import { Link } from 'react-router-dom'

import styled from "styled-components"

const Toolbar = styled.header`
* {box-sizing: border-box}
.card {
  position: relative;
}
.img-fluid {
  display: block;
  width: 100%;
  height: auto;
}
.col-10 {
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.smooth{
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.overlay1 {
 
  position: absolute; 
  bottom: 0; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1; 
  width: 100%;
  transition: .5s ease;
  opacity:0;
  height:100%;
  color: white;
  padding:10px;
}
.card:hover .overlay1 {
  opacity: 1;
  
}
.card:hover 
  .btn-primary{
     display:none
  
}
.top-left {
  position: absolute;
  top: 8px;
  left: 10px;
  @media all and (max-width:900px){   
      width:8%;
      height:8%
   } 
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
.col-2{
    align-text:center;
    @media all and (max-width:576px){   
     display:none
   } 
}
.centered {
  position: absolute;
  max-width:"5px";
  max-height:"5px";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media all and (max-width:500px){   
      width:30px;
      height:30px
   } ,
   @media all and (max-width:350px){   
      width:20px;
      height:20px
   } 
}
.bottomCentered{
    position: absolute;
  
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%); 
  @media all and (max-width:620px){   
     display:none
   } 

}
.row{
    position: relative;
  top: 80%;
  left: 0%;
  @media all and (max-width:984px){   
    top: 78%;
  left: 0%;
   } 
  /* transform: translate(-50%, -50%); */
}
p{
    @media all and (max-width:900px){   
       display:none
   }  
}
.like{
    @media all and (max-width:900px){   
       display:none
   } 
}
h5{
    @media all and (max-width:716px){   
       display:none
   } 
}
.hov:hover{
    color:white !important
}

`
const List = ({ data }) => {
      console.log("data",data);
      return (
            <Toolbar>
                  <div style={{ padding: "4%", paddingTop: "1%", paddingBottom: "1%" }}>
                        <h1 className='pt-3' style={{ fontSize: "20px", color: "white" }}>Stream For Free Now</h1>
                        <div className="row">
                              {
                                    data?.map((e) => (
                                          <div className="col col-6  g-3 col-lg-4 col-xl-3" key={e._id} >
                                                <Link to="/album" >
                                                      <div className="card" key={e._id} style={{ borderRadius: "10px", border: "none" }} onClick={() => {
                                                      localStorage.setItem("data",JSON.stringify(e))

                                                }}>
                                                            <img style={{ borderRadius: "10px" }} src={e.url} classname="img-fluid" alt="" />

                                                            <div className="overlay1" style={{ padding: "1%" }}>
                                                                  <img className='centered' src={play} alt="" style={{ maxwidth: "65px", maxHeight: "65px" }} />
                                                                  <div className="row mb-0 pb-0">
                                                                        <h3 className='mb-0 tit smooth' >{e.name}</h3>
                                                                  </div>
                                                                  <div className="row">
                                                                        <div className="col-10">
                                                                              <h5 className=" float-start" style={{ color: "#abafb4" }} aria-current="page" >{e.artistname}</h5>
                                                                        </div>
                                                                        <div className="col-2">
                                                                              <img className="p-0 m-0 float-end like" src={e.likestatus ? like2 : like1} alt="" onClick={() => {
                                                                                    // handlecolor(e._id)

                                                                              }} />
                                                                        </div>
                                                                  </div>

                                                            </div>
                                                      </div>
                                                </Link>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </Toolbar>
      )
}

export default List
