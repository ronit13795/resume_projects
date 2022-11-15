const fs = require('fs');



function errors(error, req, res, next) {
    fs.appendFile('error.log', `{error: ${error} }\n`,
        (err) => {
            res.status(500).send('something failed')
        }


    )
}

module.exports = errors