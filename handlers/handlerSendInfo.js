const fs = require('fs');

function sendInfo (req, res){

    fs.readFile('./assets/info.txt', function(err, data) {

        if (err) {
            
            console.log('error lol');

            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
}

module.exports = sendInfo;