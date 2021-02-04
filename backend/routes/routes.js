const express = require("express")
const router = express.Router();

const comment = require('../controller/commentController')
const audio = require('../controller/audioController')

router.post('/createComment', comment.createComment)
router.get('/listComments', comment.getAllComments)
//app.get('/textToSpeech', audio.listenAudio)

module.exports = router;