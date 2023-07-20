const mongoose=require("mongoose");

module.exports=async function init()
{
    
        await mongoose.connect('mongodb://127.0.0.1:27017/todoreact');
        console.log(" MongoDB connected successfully");

   
}
// await mongoose.connect('mongodb+srv://mohit489:mohit489@cluster0.8ol98zz.mongodb.net/TodoReact');
