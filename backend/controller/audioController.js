//IBM Watson
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

//Authentication
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
    apikey: 'dMupZBXELrrbouLw6mnj6g5SjExqJpo6UUQlvZf3mlrI',
    }),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f559156e-ff43-4bc6-9151-84a17c3e6b9c',
    disableSslVerification: true,//Desabilidando SSL por estar sendo executado no localhost?
});

//Converting Text to Speech
function speek(comment){
    const synthesizeParams = {
        text: req.body.comment,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaV3Voice',
    };

    textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync(comment.id+'.wav', buffer);
    })
    .then(()=> res.status(200))
    .catch(err =>
        res.status(500).send({
            error: err
        })
    );

    () =>{
        const playSong = shell.exec('play '+comment.id+'.wav', {silent: true}).output
    }
}