const sendObjectsTypeId = require('./functions/funcSendObjects');

function handleObjectsTypeId(req, res){
    
    //sendObjectsTypeId(req, res);
    //for some reason, I honestly couldn't get the program to call the sendObjectsTypeId function. 
    //I checked names, paths and anything else I could think of.
    //this is the only way I could get it working.

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

module.exports = handleObjectsTypeId;