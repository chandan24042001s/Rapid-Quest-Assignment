const express=require("express");
const router=express.Router();

const {localFileUpload, imageUpload,videoUpload, imagesizeReducer}=require("../controllers/fileUpload");

//api route
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/imagesizeReducer",imagesizeReducer);

module.exports=router;