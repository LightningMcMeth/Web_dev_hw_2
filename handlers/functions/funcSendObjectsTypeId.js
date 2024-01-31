const person = require('../../data/person');
const individual = require('../../data/individual');
const thing = require('../../data/thing');

function sendObjectsTypeId(req, res) {
    
    const requestedType = req.params.type;
    const requestedId = parseInt(req.params.id, 10);
    let response;

    switch (requestedType) {
        case 'person':

            response = person.filter( person => person.id == requestedId);
            res.json(response);
            break;
            
        case 'individual':

            response = individual.filter( individual => individual.id == requestedId);
            res.json(response);
            break;

        case 'thing':

            response = thing.filter( thing => thing.id == requestedId);
            res.json(response);
            break;
     
        default:
            res.status(404).send('Error, cry about it');
    }
}

module.exports = sendObjectsTypeId;