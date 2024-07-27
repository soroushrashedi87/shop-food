import React,{ useEffect, useState } from "react";

function Card(props){
    return(
    <div className="col-10 col-md-6 col-lg-4 mx-auto mt-3">
           <div className="card card-page">
               <div className="d-flex justify-content-center">
               <img src={props.srcImg} className="card-img-top card-page-img" alt={props.altImg}/>
               </div>
               <div className="card-header card-page-header">
                   <div className="d-flex align-items-center flex-column text-center">
                   <h2 className="card-title card-page-title">{props.title}</h2>
                   <button className="card-btn btn" onClick={()=>props.fnClick(props.id)}>
                       buy
                   </button>
                   </div>
               </div>
           </div>
           </div>
    )
}
export default Card;