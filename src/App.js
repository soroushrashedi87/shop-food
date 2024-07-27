import './App.css';
import PageCards from './components/pageCards';
import Header from './components/header';
import { Component, createContext, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Loading from './components/loading';
import SaveCard from './components/saveCard';
import Swal from 'sweetalert2';
import { Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom';
function App() {
  const [data,setdata]=useState({})
  const [load,setload]=useState(false);
  const [error,setError]=useState(false);
  const [valueSearch,setValueSearch]=useState('')
  const [search,setSearch]=useState(false)
  const [datas,setdatas]=useState(data)
  const [statusData,setStatusData]=useState(true)
  const [len,setLen]=useState(JSON.parse(localStorage.getItem('items'))==null?0:JSON.parse(localStorage.getItem('items')).length)
  const context=createContext(null)
  const requestData=()=>{
    setload(true)
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s").then(res=>res.data).then(data=>{
      setdata(data.meals)
      setload(false)
    }).catch(()=>{
      setload(false)
      if(!navigator.onLine){
          setError('pleace connected internet')
      }
      else{
        setError('error in request cards')
      }
    })
  }
  const selectItem=(prop)=>{
    const item=data.find(item=> item.idMeal==prop)
    console.log(item)
    if(localStorage.getItem('items')==null){
    var items=[];
    }
    else{
      var items=JSON.parse(localStorage.getItem('items'));
    }
    items.push(item)
    localStorage.setItem('items',JSON.stringify(items))
    Swal.fire({
      title:'It was successful',
      icon:'success',
      text:'The item has been successfully added to the shopping cart      ',
      background:'black'
    })
    setLen(JSON.parse(localStorage.getItem('items')).length)
  }
  const onSearchInput=(value)=>{
  //   setdata((items)=>{
  //     items.find(item=>item.strMeal.toLowerCase().indexOf(value)==true)
  // })
  setStatusData(false)
  const datas=[];
  data.forEach((item)=>{
    if(item.strMeal.toLowerCase().indexOf(value)==0 || item.strMeal.toLowerCase().indexOf(value)>0){
     datas.push(item)
     setError(false)
    }
    setdatas(datas)
  })
}
const deleteCard=(datas,id,setData)=>{
  const data=datas;
  const newData=[];
  data.forEach((item)=>{
    if(item.idMeal!=id){
      newData.push(item)
    }
  })
  localStorage.setItem("items",JSON.stringify(newData))
  setData(newData)
  setLen(newData.length)
}

  useEffect(()=>{
    requestData();
  },[])
  return (
    <context.Provider value={{
      data:datas,
      error:error,
      setError:setError,
      selectItem:selectItem,
      lengthsCard:len,
      onSearchInput,
      datas:data,
      statusData,
      deleteCard,
      // setValueSearch,
      // valueSearch:valueSearch,
    }}>
      <Router>
    <div className="App">
        <Header context={context}/>
        {load?<Loading/>:''}
      <Routes>
          <Route path="/" element={<PageCards context={context}/>}/>
          <Route path="/cart" element={<SaveCard context={context}/>}/>
        </Routes>
    </div>
    </Router>
    </context.Provider>
  );
}

export default App;
