const mongoose=require('mongoose');

require("dotenv").config(); // it jo bhi eve ke define kia hoga to load hojaye ga process object ke andar 
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log("MongoDB connection successful");
})
.catch((error) => {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
});
}
module.exports=dbConnect;

// .ENV - PROCCES OBJECT KE ANDAR KESE CHALLAGYA ?
//ensure appilication DB

//What does process.exit(1) mean?

// process → global Node.js object

// exit() → stops the running process

// 1 → exit code indicating failure
// exp - If the database is not connected:

// The app cannot function correctly

// It’s better to stop the server than run in a broken state