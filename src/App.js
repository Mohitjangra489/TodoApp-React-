import './App.css';
import Header from './components/header';
import Inputbox from './components/inputbox';
import Todobox from './components/todobox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

function App(props) {
if(props.data)
{
console.log(props.data);
}

  const[finaldata,setfinaldata]=useState([]);


  function changetodo(todoitem){
    console.log(todoitem);
    let obj={
      name:todoitem.name,
      desc:todoitem.desc,
      checkflag:false
    }
  
    setfinaldata(obj);
    console.log("finaldata",finaldata);
  }
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<> <Header /><Inputbox fun={changetodo}/>< Todobox chng={finaldata}/> </>}>
      </Route>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
