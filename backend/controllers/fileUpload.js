const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}
async function uploadFileToCloudinary1(file, folder) {
  const options = { folder };
  options.resource_type = "auto";
  console.log("temp file path", file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//video file uploading
exports.videoUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile;
    console.log(file);

    //validation
    const supportedTypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("file type", fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "file formatted not supported",
      });
    }
    //file format supported hai
    console.log("uploading to rapid quest");
    const response = await uploadFileToCloudinary1(file, "RapidQuest");
    console.log(response);

    
      // No subtitles provided, proceed as before
      const fileData = await File.create({
        name,
        tags,
        email,
        videoUrl: response.secure_url,
      });

      // Return success response
      res.json({
        success: true,
        videoUrl: response.secure_url,
        message: "Video uploaded successfully",
      });
    
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucesss: false,
      message: "something went wrong",
    });
  }
};
async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  console.log("temp file path", file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// localFileUpload->handle Function
exports.localFileUpload = async (req, res) => {
  try {
    //fetch file from file
    const file = req.files.file;
    console.log("File has been arrived -> ", file);

    //create path where file need to be stored on server
    let path = __dirname + "/files/" + file.name;
    console.log("PATH-> ", path);

    //add path to the move function
    file.mv(path, (err) => {
      console.log(err);
    });

    //create a sucessful response
    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on the server");
    console.log(error);
  }
};

//image upload ka handler
exports.imageUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("file type", fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "file formatted not supported",
      });
    }
    //file format supported hai
    console.log("uploading to rapid quest");
    const response = await uploadFileToCloudinary(file, "RapidQuest");
    console.log(response);

    //db mey Entry save krni hai
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });
    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucesss: false,
      message: "something went wrong",
    });
  }
};

async function uploadFileToCloudinary2(file, folder, quality) {
  const options = { folder };
  if (quality) {
    options.quality = quality;
  }
  console.log("temp file path", file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//image size reducer

exports.imagesizeReducer = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("file type", fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "file formatted not supported",
      });
    }
    //file format supported hai
    console.log("uploading to rapid quest");
    const response = await uploadFileToCloudinary2(file, "RapidQuest", 30);
    console.log(response);

    //db mey Entry save krni hai
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });
    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucesss: false,
      message: "something went wrong",
    });
  }
};
