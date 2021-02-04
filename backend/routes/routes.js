const express = require("express")
const app = express()
const comment = require('../controller/commentController')
const audio = require('../controller/audioController')

app.post('/createComment', comment.createComment)
app.get('/listComments', comment.getAllComments)
app.get('/textToSpeech', audio.listenAudio)