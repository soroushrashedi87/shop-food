import Card from "./Card";
import { useContext, useEffect, useState } from "react";
function PageCards(props){
    const dataContext=useContext(props.context);
    const {data,error,setError,selectItem,onSearchInput,statusData,datas}=dataContext;
    return(
        <div className="pageCards mt-2">
            <div className="container py-5">
                <div className="row">
                    {error==false?
                                        <>
                                        {
                                            statusData?
                                            datas.length>0?datas.map(item=><Card title={item.strMeal} srcImg={item.strMealThumb} id={item.idMeal} altImg={item.strMeal} fnClick={selectItem} onSearchInput={onSearchInput} />):''
                                            :
                                            data.map(item=><Card title={item.strMeal} srcImg={item.strMealThumb} id={item.idMeal} altImg={item.strMeal} fnClick={selectItem} onSearchInput={onSearchInput} />)

                                        }
                                        </>
                                        :
                                        <div className="text-error-cards">{error}</div>
                }
                </div>
            </div>
        </div>
    );
}
export default PageCards;