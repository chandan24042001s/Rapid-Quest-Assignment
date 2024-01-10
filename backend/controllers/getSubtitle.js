// Route to retrieve subtitles for a video
app.get('/subtitles/:videoId', async (req, res) => {
    try {
      const videoId = req.params.videoId;
  
      // Retrieve subtitles from MongoDB
      const subtitleData = await Subtitle.findOne({ videoId });
  
      if (subtitleData) {
        res.json(subtitleData);
      } else {
        res.status(404).json({ error: 'Subtitles not found for the specified video.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });