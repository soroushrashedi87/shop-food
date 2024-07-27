import React, { useContext, useState } from "react";
import CardSave from "./CardSave";
import Header from "./header";
function SaveCard(props){
    const dataContext=useContext(props.context)
    const {deleteCard}=dataContext;
    const [data,setData]=useState(JSON.parse(localStorage.getItem("items")))
    return(
        <div className="saveCardPage mt-2">
            <div className="container">
            <div className="bg-saveCardPage py-5">
                <div className="row">
                    {data.map(item=><CardSave title={item.strMeal} id={item.idMeal} srcImg={item.strMealThumb} country={item.strArea} deleteCard={deleteCard} data={data} setData={setData}/>)}
                </div>
            </div>
            </div>
        </div>
    );
}
export default SaveCard;