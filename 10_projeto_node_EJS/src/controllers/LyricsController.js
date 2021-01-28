const Lyric = require('../models/Lyric');

class LyricsController {
  lyricPostAction(req, res) {
    Lyric.postLyric(req, res)
  }

}

module.exports = new LyricsController;