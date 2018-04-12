require('seneca')()

    .use('item')
    .use('entity')
    .use('mongo-store', {
        name: 'test-mongo-store',
        host: '127.0.0.1', //localhost
        port: 27017
    })
    // listen for role:item messages
    // IMPORTANT: must match client
    .listen({ type: 'tcp', pin: 'role:item' })
