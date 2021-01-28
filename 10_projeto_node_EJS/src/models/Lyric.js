const getLyric = require('../utils/api')

class Lyric {
  async postLyric(req, res) {
    const { artist, music } = req.body;
    const result = await getLyric(artist, music)

    res.render('lyric', { data: result })
  }

}

module.exports = new Lyric;