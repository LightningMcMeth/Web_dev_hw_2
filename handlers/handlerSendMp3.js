const sendMp3 = require('./functions/funcSendMp3');

function handlerMp3(req, res) {

    sendMp3(req, res, './assets/omg.mp3');
}

module.exports = handlerMp3;