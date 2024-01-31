const fs = require('fs');

function sendImage(req, res, filepath) {
    
    fs.readFile(filepath, function(err, data) {
        
        if (err) {

            console.log('err');
            res.writeHead(404, {'Content-Type': 'text/html'});

            return res.end("404 not found cry about it lol");
        }

        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data);

        return res.end();
    })
}

module.exports = sendImage;