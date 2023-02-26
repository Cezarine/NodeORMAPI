const bodyParser = require('body-parser');
const People = require('./peoplesRoutes.js');

module.exports = pApp =>
{
    pApp.use(bodyParser.json());
    pApp.use(People);
}