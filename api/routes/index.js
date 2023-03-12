const bodyParser = require('body-parser');
const vPeople = require('./peoplesRoutes.js');
const vNiveis = require('./NiveisRouters.js');
const vTurmas = require('./TurmasRouters.js');

module.exports = pApp =>
{
    pApp.use(bodyParser.json());
    pApp.use(vPeople, vNiveis, vTurmas);


}