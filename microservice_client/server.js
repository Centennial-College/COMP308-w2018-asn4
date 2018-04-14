//Express example to connect with data_api microservice
const seneca = require('seneca')();
const SenecaWeb = require('seneca-web')
const Express = require('express')
const bodyParser = require('body-parser');

// Properties
const APP_PORT = 3000;
const INDEX_ROUTES = require('./app/routes/index.server.routes');

const app = Express()
    // Use the 'body-parser' and 'method-override' middleware functions
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    // set application view engine and 'views' folder
    .set('views', './app/views')
    .set('view engine', 'ejs')
    // load the routing files
    .use('/', INDEX_ROUTES);

const senecaWebConfig = {
    context: app,
    adapter: require('seneca-web-adapter-express'),
    options: { parseBody: false } // so we can use body-parser
}

app.listen(APP_PORT);

////integrate seneca with web server
seneca
    .use(SenecaWeb, senecaWebConfig)
    .use('entity')
    .use('api')
    // .client({ type: 'tcp', pin: 'role:item' })
    .client({ host: 'microservice', type: 'tcp', pin: 'role:item' })

// 2018.04.11 - 22:07:19 - test microservice using code
// seneca.act({ role: 'item', cmd: 'add', id: "20", name: "usb", price: 2.99, description: "nice one" }, function (err, result) {
//     console.log(result);
// })
