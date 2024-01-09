const mongoose=require("mongoose");
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.MONGOOSE_URL, {
     
        serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
       })
    .then(console.log("DB connection successfully"))
    .catch((error)=>{
        console.log("DB connection issues");
        console.error(error);
        process.exit(1);
    })
}
