// Create a new 'render' controller method
exports.render = function (req, res) {

    // read values from index.ejs
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const operation = req.body.operation;

    console.log(`operation: ${operation}`);
    console.log(`id: ${id}`);
    console.log(`name: ${name}`);
    console.log(`price: ${price}`);
    console.log(`description: ${description}`);
    //

    let callingUrl = 'http://localhost:3000/api/items/' + operation;

    switch (operation) {
        case "add":
        case "update":
            callingUrl += `?id=${id}&name=${name}&price=${price}&description=${description}`;
            break;
        case "remove":
            callingUrl += `?id=${id}`;
            break;
    }
    res.redirect(callingUrl);
};


