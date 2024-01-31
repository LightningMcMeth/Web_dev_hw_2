const sendObjectsType = require('./functions/funcSendObjectsType');

function handleObjectsType(req, res){
    sendObjectsType(req, res);
}

module.exports = handleObjectsType;