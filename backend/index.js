const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 5000;

app.use(
    cors({
      origin: "*",
    })
  );

app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload(
    {useTempFiles:true,
    tempFileDir:'/tmp/'}
));

const db=require("./config/database");
db.connect();

const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryconnect();

const upload=require("./routes/FileUpload");
app.use('/api/v1/upload',upload);

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})