const List = ({data}) => {
    return (
        <div className="container p-1 px-4 mt-3">
           <div className="row bg-white">
               <div className="col-2 text-center px-0" style={{border:"1px solid red"}}>
                     <h4 className="bg-dark text-white py-2">Batch</h4>
                     <h5>{data.batch}</h5>
               </div>
               <div className="col-2 text-center px-0" style={{border:"1px solid red"}}>
                     <h4 className="bg-dark text-white py-2">Title</h4>
                     <h5>{data.title}</h5>
               </div>
             
               <div className="col-2 text-center px-0" style={{border:"1px solid red"}}>
                     <h4 className="bg-dark text-white py-2">Instructor</h4>
                     <h5>{data.instructor}</h5>
               </div>
               <div className="col-2 text-center px-0" style={{border:"1px solid red"}}>
                     <h4 className="bg-dark text-white py-2">Type</h4>
                     <h5>{data.type}</h5>
               </div>
               <div className="col-2 text-center px-0" style={{border:"1px solid red"}}>
                     <h4 className="bg-dark text-white py-2">Date</h4>
                     <h5>{data.date}</h5>
               </div>
               <div className="col-2 text-center px-0" style={{border:"1px solid red"}}>
                     <h4 className="bg-dark text-white py-2">Time</h4>
                     <h5>{data.time}</h5>
               </div>
           </div>
        </div>
    )
}

export default List