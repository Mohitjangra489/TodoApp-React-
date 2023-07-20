import React from 'react';
import { useState } from 'react';

function Inputbox(prop) {
  let func=prop.fun;
  // console.log(func);
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");

    let handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            if(name!=="" && desc!=="")
            {   
                let res = await fetch('http://localhost:8000/savetodo',
                {
                  method: 'POST',
                  headers:{'Content-Type':'application/json; charset=UTF-8'},
                  body: JSON.stringify({ name: name, desc: desc })
                });
               
                let resJson=await res.json();
                console.log(resJson);
                func({ name: name, desc: desc });

                if(res.status===200)
                {
                  setname("");
                  setdesc("");
                  console.log("yes");
                }
            }
          
        }
        catch(err){
        console.log(err);
        }
   
    };
  return (
    <div id="inputbox">
        <div id="input1">
        <span>Name</span>
        <input className='name' placeholder='Enter Todo name' value={name} onChange={(event)=>setname(event.target.value)}  ></input>
        </div>
        <div id="input2">
        <span>Description</span>
        <input className='name' placeholder='Enter Desciption' value={desc} onChange={(event)=>setdesc(event.target.value)} ></input>
        </div>
        <div id="input3">
        <button type='submit' id="submit" onClick={handlesubmit}>Add Todo</button>
        </div>
       
     

    </div>
  )
}

export default Inputbox;
