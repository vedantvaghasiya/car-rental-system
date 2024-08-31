const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique:true
        
    },
    password: {
        type:String,
        require:true,
    },
    confirmpassword: {
        type:String,
        require:true,
        
    }
})


// now we need to create a collection 

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;