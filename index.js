const cors = require('cors');
const fs = require('fs');
const os = require('os');
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const sendImage = require('./handlers/handlerSendImage.js');
const sendMp3 = require('./handlers/handlerSendMp3.js');
const sendPdf = require('./handlers/handlerSendPdf.js');
const sendFile = require('./handlers/handlerSendFile.js');
const sendObjects = require('./handlers/handlerSendObjects.js');
const sendObjectsType = require('./handlers/handlerSendObjectsType.js');
const sendObjectsTypeId = require('./handlers/handlerSendObjectsTypeId.js');
const sendInfo = require('./handlers/handlerSendInfo.js');

const port = 1234;

const whitelist = ["http://localhost:3000", "http://localhost:3001", "http://localhost:1234"];

const corsOptions = {
    origin: originFunction,
};

function originFunction(origin, callback) {

    if (whitelist.includes(origin) || !origin) {

        callback(null, true);
    } else {

        callback(new Error("Not allowed by CORS"));
    }
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/info', sendInfo);
app.get('/mp3', sendMp3);
app.get('/pdf', sendPdf);
app.get('/objects', sendObjects);
app.get('/:img', sendImage);
app.get('/file/:filename', sendFile);
app.get('/objects/:type', sendObjectsType);
app.get('/objects/:type/:id', sendObjectsTypeId);


app.listen(port, () => {
    console.log(`Server is running on localhost: ${port}`);
});