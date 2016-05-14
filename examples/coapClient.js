var coap = require('coap');

/** Register */
coap
    .request(
        {
            host: 'localhost',
            method: 'POST',
            pathname: '/rd',
            query: 'ep=MFL001&lt=86400&lwm2m=1.0&b=U'
        })
    .end();

/** Update */
coap
    .request(
        {
            host: 'localhost',
            method: 'PUT',
            pathname: '/rd/MFL001',
            query: 'lt=65000'
        })
    .end();

/** Deregister */
coap
    .request(
        {
            host: 'localhost',
            method: 'DELETE',
            pathname: '/rd/MFL001',
            query: 'MFL0'
        })

    .on('end', function() {
        process.exit(0);
    })
    
    .end();
