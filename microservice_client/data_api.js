//
module.exports = function data_api(options) {
    var seneca = this;
    //action names
    var valid_ops = { add: 'add', fetch: 'fetch' }
    //define the action
    seneca.add('role:data_api,path:accesstype', function (msg, respond) {
        //query the request to extract the values of fields for an item
        var id = msg.args.query.id;
        var name = msg.args.query.name;
        var price = msg.args.query.price;
        var description = msg.args.query.description;
        //
        console.log('name ' + name);
        //The inbound message should have the property operation
        //that specifies the access type to perform: add or fetch.
        var operation = msg.args.params.operation
        //
        console.log('operation: ' + operation)
        
        //build up the message both from a string (in this case 'role:item'), and an object
        seneca.act('role:item', {
            cmd: valid_ops[operation],
	    id: id,
            name: name,
            price: price,
            description: description
        }, respond)
    })

    //action pattern role: web, route:*
    //Define a web service as a mapping from URL routes to action patterns.
    //  seneca.act('role:web', { routes: Routes }, (err, reply) => {
    //        console.log(err || reply.routes)
    //  })

    //initializing plugin
    seneca.add('init:data_api', function (msg, respond) {
        //make a call to the pattern role:web, and define the property routes
        this.act('role:web', {
            routes: {
                prefix: '/data_api', //the URL prefix
                pin: 'role:data_api,path:*', //the set of patterns to map
                map: { //the list of pin wildcard property values to use as URL endpoints.
                    accesstype: { GET: true , suffix: '/:operation' }
                }
            }
        }, respond)
    })

}
