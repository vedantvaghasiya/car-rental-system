const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

 const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/Car-Rental",{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection sucessful`);
}).catch((e)=>{
    console.log(`no connection`);
})
module.exports = connectDB

        