const express=require("express");
const app=express();
const cors=require("cors");
const fs = require('fs');

const port=8000;
const http=require('http').createServer(app);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

const initdb = require('./public/database/init');
initdb();
const todomodel = require('./public/database/todo');


app.post('/savetodo',function(req,res){
        let save=req.body;
        console.log("warwjhiufhuihfuihsuifhuyshufusu:",save);
        let name=req.body.name;
        let desc=req.body.desc;
   
        let todo={
          name,
          desc
        }
        let newtodo=new todomodel(todo);
        newtodo.save();

        res.json("done");

});

app.get('/gettodo', async function(req,res){
 console.log("inside gettodo")
 try{
  let data=await todomodel.find({});
  console.log("data",data);
  res.json(data);
 }
 catch(error){
console.log("errorfdkngojbndjno",error);
 }

});

app.post('/deletetodo', async function(req,res){
console.log(req.body);  
let data=await todomodel.deleteOne({_id:req.body.id});
  res.json("deleted");
});


app.post('/updatecheck',async function(req,res){
  console.log(req.body);
  let data=await todomodel.updateOne({_id:req.body.id},{ $set: { checkflag: req.body.chk } });
  console.log(data);
  res.json("updated!!!");
});


http.listen(port, () => {
    console.log("server started at port %d", port);
})