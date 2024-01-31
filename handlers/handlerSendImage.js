const sendImage = require('./functions/funcSendImage.js');  //check if it works without ".js" cuz I think I forgot to add it but it still worked

function handlerImage(req, res) {

    let filepath = './assets/' + req.params.img; 
    sendImage(req, res, filepath);
}

module.exports = handlerImage;