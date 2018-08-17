  //Install express server
const express = require('express');
const path = require('path');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var SpellCorrector = require('spelling-corrector');
var spellCorrector = new SpellCorrector();
// you need to do this step only one time to load the Dictionary
spellCorrector.loadDictionary();


const app = express();
const port = process.env.PORT || 5555;


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/product-ui'));

function correctSentence(sentence) {
    var correctedSentence = "";
    //tokenizing the sentence
    var tokens = sentiment.analyze(sentence).tokens;
    //correcting the right sentence
    for (var i = 0; i < tokens.length; i++) {
        //console.log(tokens[i] + "-->" + spellCorrector.correct(tokens[i]))
        correctedSentence += ' ';
        correctedSentence += spellCorrector.correct(tokens[i]); 
    }
    return correctedSentence.trim();
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/product-ui/index.html'));
});

app.get('/sentence/correction', function (req, res) {
    var sentence = req.query.q;
    var correctedSentence = correctSentence(sentence)
    res.json({ "correctedSentence": correctedSentence });
});

// Start the app by listening on the default Heroku port
app.listen(port, function () {
    console.log("Server started on port " + port);
});