const express = require("express");
const server = express();
const mongoose = require('mongoose')
const cors  = require('cors')
const fs = require("fs");
const port = 8080;


const productRouter = require("./routes/product")
const userRouter = require("./routes/user")

//db-connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sourabhdost:Qwertyuiop@cluster0.n5atpa3.mongodb.net/ecommerce?retryWrites=true&w=majority');
  console.log('database connected')
}


//bodyParser without this it cannot read body
server.use(cors())
server.use(express.json());
server.use(express.static('build'))
server.use("/products",productRouter.router)
server.use("/users",userRouter.router)
server.use("*",(req,res)=>{
  res.sendFile(__dirname+"/build/index.html")
})




server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
