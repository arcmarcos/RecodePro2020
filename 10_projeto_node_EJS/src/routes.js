const { Router } = require("express");
const routes = new Router();

const LyricsController = require('./controllers/LyricsController');

routes.get('/', (req, res) => {
  res.render('index');
})

routes.post('/lyric', LyricsController.lyricPostAction)

module.exports = routes;