import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function CardSaveIcon(props){
  const [pageCart,setPageCart]=useState(false)
    return(
        <div className="card-save">
          <Link to={useLocation().pathname=='/'?'/cart':'/'} className="card-save-link">
        <p>
          {props.len}
        </p>
        </Link>
      </div>
    );
}
export default CardSaveIcon;