const jsonServer = require('json-server');

const patients = require('./data/patients.json');

const server = jsonServer.create();
const JSONServerMiddleware = jsonServer.defaults();

server.use(JSONServerMiddleware);

server.get('/patients', (req, res) => {
  res.jsonp(patients);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('JSON Server is running in port 4000');
});
