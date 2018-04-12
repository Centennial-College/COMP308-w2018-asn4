
// This plugin is a data api for item operations

module.exports = function item(options) {
    const seneca = this;

    //
    //define an action pattern to add an item to the mongo store
    seneca.add('role:item, cmd:add', function add(msg, respond) {
        //create the record object
        let items = seneca.make("items");
        //populate the data fields
        items.id = msg.id;
        items.name = msg.name;
        items.price = msg.price;
        items.description = msg.description;
        //save the record
        items.save$(function (err, item) {
            respond(err, items.data$(false));
        });
    });
    // update
    seneca.add('role:item, cmd:update', function add(msg, respond) {
        //create the record object
        let items = seneca.make("items");
        //populate the data fields
        items.id = msg.id;
        items.name = msg.name;
        items.price = msg.price;
        items.description = msg.description;
        //save the record
        items.save$(function (err, item) {
            respond(err, items.data$(false));
        });
    });
    //define an action pattern to remove an item by name
    seneca.add('role:item, cmd:remove', function remove(msg, respond) {
        console.log('in remove action');
        let items = seneca.make("items");
        console.log('msg.id ' + msg.id);
        items.remove$(msg.id, respond);
    });

    //
    //define an action pattern to list the items
    seneca.add('role:item, cmd:fetch', function fetch(msg, respond) {
        let items = seneca.make("items");
        items.list$({}, respond);
    });
}