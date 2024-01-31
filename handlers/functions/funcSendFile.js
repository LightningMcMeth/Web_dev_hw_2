const fs = require('fs');

function sendFile(req, res, filepath) {

    let contentType = 'text/html';

    if(req.params.filename.includes('.jpg') || req.params.filename.includes('.jpg')) {

        contentType = 'image/jpeg';
    } else if (req.params.filename.includes('.png')) {

        contentType = 'image/png';
    } else if (req.params.filename.includes('.pdf')) {

        contentType = 'application/pdf';
    } else if (req.params.filename.includes('.mp3')) {
            
        contentType = 'audio/mpeg';
    }
    else if (req.params.filename.includes('.html')) {
            
        contentType = 'text/html';
        filepath = './assets/gamer/' + req.params.filename;
    }
    else if (req.params.filename.includes('.txt')) {
            
        contentType = 'text/plain';
        filepath = './assets/gamer/' + req.params.filename;
    }

    fs.readFile(filepath, function(err, data) {

        if (err) {
            
            console.log('error lol');

            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }

        res.writeHead(200, {'Content-Type': contentType});
        res.end(data);
    });
}

module.exports = sendFile;