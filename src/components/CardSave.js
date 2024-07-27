import React from "react";
function CardSave(props){
    return(
        <div className="col-10 mx-auto">
            <div className="cardsave py-3 my-3">
            <div className="d-flex align-items-center container-cardsave">
                <img src={props.srcImg} className="img-cardsave mx-auto mx-sm-2" alt={props.title}/>
                <div className="ml-3">
                    <h5 className="title-cardsave display-4">{props.title}</h5>
                    <h5 className="lead text-secondary">{props.title} is a beutiful food {props.country}</h5>
                </div>
                <div className="btn-group btns-cardsave mx-sm-auto">
                    <button className="btn btn-outline-secondary btn-cardsave text-uppercase border-left border-top border-bottom" onClick={()=>props.deleteCard(props.data,props.id,props.setData)}>
                        delete
                    </button>
                    <button className="btn btn-outline-secondary btn-cardsave text-uppercase border-right border-top border-bottom">
                        buy
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default CardSave;