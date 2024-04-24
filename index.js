'use strict';

const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');
const Path = require('path');


const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3005,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    await server.register(require('@hapi/inert'));
    await server.register(require('@hapi/vision'));


    server.route({
        method: 'GET',
        path: '/index.html',
        handler: function (request, h) {

            return h.file('index.html');
        }
    });

    server.views({
        engines: {
            html: require('ejs')
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return h.view('index');
        }
    });


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();