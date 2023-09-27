import React from 'react';
import { useState, useEffect } from 'react';



function Todobox({ chng }) {
  console.log("props:", chng);

  const [fdata, setfdata] = useState([]);

  useEffect( function () {
    fetch('mongodb+srv://mohit489:mohit489@cluster0.8ol98zz.mongodb.net/TodoReact/gettodo')
      .then(res => res.json())
      .then(data =>{
        console.log("11111111:",data);
        setfdata(data);
        console.log("fdata",fdata);
      });
      // console.log("useeffect",fdata);
  }, [chng]);


  async function checkbox(event) {
    let check = event.target.checked;
    console.log(check);
    let divid = event.target.parentNode.parentNode.parentNode.id;
    let node = event.target.parentNode.previousElementSibling;

    if (check) {
      console.log("1");
      node.children[0].style="text-decoration: line-through;  text-decoration-thickness: 5px; ";
      node.children[1].style="text-decoration: line-through;  text-decoration-thickness: 5px; ";
    }
    else {
      console.log("2");
      node.children[0].style.textDecoration = "none";
      node.children[1].style.textDecoration = "none";

    }

    let res = await fetch('http://localhost:8000/updatecheck',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id: divid, chk: check })
      });

    let resJson = await res.json();
    console.log(resJson);



  }
  // console.log(fdata);

  async function deletetodo(event) {
    let divid = event.target.parentNode.parentNode.parentNode.id;
    let div = event.target.parentNode.parentNode.parentNode;
    div.style.display = "none";
    // console.log(event.target.parentNode.parentNode.parentNode);
    let res = fetch('http://localhost:8000/deletetodo',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id: divid })
      });
    console.log("divid", divid);

  };
  return (
    <div id="todobox">
      {fdata.map((todo) => {
        // console.log(todo, todo.checkflag);
        return (
          <>

            <div className='list' id={todo._id} >
              <div className='outer' >
                <div className='innerlist' >
                  {todo.checkflag ? <span className='name1' style={{ textDecorationLine: 'line-through',textDecorationThickness:'5px' }} >{todo.name} </span> : <span className='name1' >{todo.name} </span>}
                  {todo.checkflag ? <span className='desc1' style={{ textDecorationLine: 'line-through',textDecorationThickness:'5px' }}>{todo.desc}</span> : <span className='desc1'>{todo.desc}</span>}
                </div>
                <div className='inner'>
                  <button className='btn-btn danger' onClick={deletetodo} >delete</button>
                  {todo.checkflag ? <input type='checkbox'  className='strikethrough' onClick={checkbox} defaultChecked /> : <input type='checkbox' className='check' onClick={checkbox} />}
                </div>
              </div>
              <hr></hr>
            </div>

          </>
        )


      })}


    </div>
  )
}

export default Todobox;
