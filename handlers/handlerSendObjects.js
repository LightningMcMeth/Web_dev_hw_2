const sendObjects = require('./functions/funcSendObjects');

function handleObjects(req, res){
    sendObjects(req, res);
}

module.exports = handleObjects;