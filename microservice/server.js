require('seneca')()

    .use('item')
    .use('entity')
    .use('mongo-store', {
        name: 'test-mongo-store',
        host: 'mongo', //service name
        // host: '127.0.0.1', //localhost
        port: 27017
    })
    // listen for role:item messages
    // IMPORTANT: must match client
    // .listen({ port: 8080, pin: 'role:item' })
    .listen({ type: 'tcp', pin: 'role:item' })
    // .listen()
