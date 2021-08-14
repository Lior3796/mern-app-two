const studentModel = require("../Models/studentModel");


async function getStudents(req,res){
    
    try{
        await studentModel.find({},(err,result)=>{
            if (err) throw err;
            res.json(result);
        })
    }
    catch(e){
        console.log(e);
    }
  
}

async function postStudents(req,res){
    try{
        const {student} = req.body;
        await studentModel.insert(student,(err,result)=>{
            if (err) throw err;
            res.json(result);
        })
    }
    catch(e){
        console.log(e);
    }
  
}

module.exports = {
    getStudents,
    postStudents
}