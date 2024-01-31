const sendFile = require('./functions/funcSendFile.js');

function handleFile(req, res) {

    let filepath = './assets/' + req.params.filename;
    sendFile(req, res, filepath);
}

module.exports = handleFile;