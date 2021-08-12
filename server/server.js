const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());

const db = require("./DB");
const StudentRouter = require("./Routers/StudentRouter");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hello kineret");
})

app.use("/student",StudentRouter)

app.listen(PORT,(err,result)=>{
    if(err) throw err;
    console.log(result);
})