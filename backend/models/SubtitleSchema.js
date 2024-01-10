
const mongoose=require("mongoose");
const subtitleSchema = new mongoose.Schema({
    videoId: String,
    subtitles: [{
      text: String,
      startTime: Number,
      endTime: Number
    }]
  });
  
  const Subtitle = mongoose.model('Subtitle', subtitleSchema);
  module.exports=Subtitle;