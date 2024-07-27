import React, { useState } from "react";
function Search(props){
  const [value,setValue]=useState('')
  const {onSearchInput}=props;
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(navigator.onLine){
    onSearchInput(value)
    }
  }
  return(
    <div className="section-search my-5">
        <form className="form-search" action="#" onSubmit={handleSubmit}>
          <input className="input-search" type="text" placeholder="search card..." onChange={(e)=>setValue(e.target.value)} value={value}/>
          <button type="submit" className="btn btn-formSearch">Search</button>
        </form>
      </div>
    )
}
export default Search;