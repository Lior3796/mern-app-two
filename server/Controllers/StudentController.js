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

module.exports = {
    getStudents
}