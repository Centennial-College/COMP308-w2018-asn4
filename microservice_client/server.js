//Express example to connect with data_api microservice
var seneca = require('seneca')();
var SenecaWeb = require('seneca-web')
var Express = require('express')
var Router = Express.Router
var context = new Router()
//
var senecaWebConfig = {
    context: context,
    adapter: require('seneca-web-adapter-express'),
    options: { parseBody: false } // so we can use body-parser
}

var app = Express()
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
