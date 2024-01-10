// Route to create and store subtitles
exports.subtitle=async(req,res)=>{
    try {
        const { videoId, subtitles } = req.body;
    
        // Save subtitles to MongoDB
        const subtitleData = new Subtitle({ videoId, subtitles });
        await subtitleData.save();
    
        res.status(201).json({ message: 'Subtitles created and stored successfully.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
      }
}