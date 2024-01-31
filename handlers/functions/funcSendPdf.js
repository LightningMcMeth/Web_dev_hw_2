const fs = require('fs');

function sendPdf(req, res, filepath) {
    
    fs.readFile(filepath, function(err, data) {
        
        if (err) {

            console.log('err');
            res.writeHead(404, {'Content-Type': 'text/html'});

            return res.end("404 not found cry about it lol");
        }

        res.writeHead(200, {'Content-Type': 'application/pdf'});
        res.end(data);

        return res.end();
    })
}

module.exports = sendPdf;