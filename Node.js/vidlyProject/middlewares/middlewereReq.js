const fs = require('fs');


function logReq(req, res, next) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    fs.appendFile('logs.log', `{method: ${req.method}, url:${fullUrl} ,body: ${JSON.stringify(req.body)} } \n`, (err) => {
        if (err) {
            console.log('cant write the req to file...')
            return next()
        }
        next()

    })

}

module.exports = logReq