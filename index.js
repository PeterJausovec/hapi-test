var Hapi = require('hapi')

const PORT = process.env.PORT || 8080;

const server = new Hapi.Server();
server.connection({ port: PORT });
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello hapi-verse!');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Running on: ' + server.info.uri);
});
