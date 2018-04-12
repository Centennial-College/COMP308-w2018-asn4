//Express example to connect with data_api microservice
const seneca = require('seneca')();
const SenecaWeb = require('seneca-web')
const Express = require('express')
const Router = Express.Router
const context = new Router()
//
const senecaWebConfig = {
    context: context,
    adapter: require('seneca-web-adapter-express'),
    options: { parseBody: false } // so we can use body-parser
}

const app = Express()
    .use(require('body-parser').json())
    .use(context)
    .listen(3000)

////integrate seneca with web server
seneca.use(SenecaWeb, senecaWebConfig)
//
seneca.use('entity')
//
seneca.use('data_api')
seneca.client({ type: 'tcp', pin: 'role:item' })


// 2018.04.11 - 22:07:19 - test microservice using code
// seneca.act({ role: 'item', cmd: 'add', id: "20", name: "usb", price: 2.99, description: "nice one" }, function (err, result) {
//     console.log(result);
// })
