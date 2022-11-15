const jwt = require('jsonwebtoken')





function validateBody(schema) {
    {
        return (req, res, next) => {
            const result = schema.validate(req.body)
            if (result.error) {
                return res.send(result.error.details[0].message + ' from middleware')
            }

            next()
        }

    }
}



function validToken(req, res, next) {

    const token = req.header('x-token')
    if (!token) return res.status(401).send('access denies no token provided')

    try {

        const TOKEN_SECRET = process.env.TOKEN_SECRET;
        const decoded = jwt.verify(token, TOKEN_SECRET)
        req.user = decoded
        next()

    }
    catch (err) {
        res.status(400).send('invalid token')
    }

}


module.exports.validToken = validToken
module.exports.validateBody = validateBody