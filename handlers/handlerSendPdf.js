const sendPdf = require('./functions/funcSendPdf');

function handlerPdf(req, res) {

    sendPdf(req, res, './assets/The_Art_Of_War.pdf');
}

module.exports = handlerPdf;