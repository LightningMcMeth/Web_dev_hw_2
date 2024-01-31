const person = require('../../data/person');
const individual = require('../../data/individual');
const thing = require('../../data/thing');

function sendObjectsType(req, res) {

    const requestedType = req.params.type;

    switch (requestedType) {
        case 'person':

            res.json(person);
            break;
            
        case 'individual':

            res.json(individual);
            break;

        case 'thing':

            res.json(thing);
            break;

        default:
            res.status(404).send('Error :((');
    }
}

module.exports = sendObjectsType;