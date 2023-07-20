const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const todoSchema= new Schema({
name:{type:String},
desc:{type:String},
checkflag:{type:Boolean,default:false},
});

const todomodel=mongoose.model('todo',todoSchema);
module.exports=todomodel;