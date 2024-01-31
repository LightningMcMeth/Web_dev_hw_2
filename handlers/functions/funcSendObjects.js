const person = require('../../data/person');
const individual = require('../../data/individual');
const thing = require('../../data/thing');

function sendObjects(req, res) {

    let response = [...person, ...individual, ...thing];
    res.json(response);
}

module.exports = sendObjects;