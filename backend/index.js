const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const cors=require("cors")
require("dotenv").config();
const PORT=process.env.PORT || 5000;


//Cors management
app.use(
  cors({
      origin:["https://localhost:5000","https://siya-ram-store.vercel.app","http://localhost:3000"],
      methods: ["post","get"],
      credentials:true,
  })
)

// Middleware to parse JSON and handle form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload(
    {useTempFiles:true,
    tempFileDir:'/tmp/'}
));

//DB connect
const db=require("./config/database");
db.connect();

//cloudinary connect 
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryconnect();

//video upload
const upload=require("./routes/FileUpload");
app.use('/api/v1/upload',upload);


//default route
app.get("/",(req,res)=>{
  res.send(`<h1> This is Home page bhaiye </h1>`);
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})
