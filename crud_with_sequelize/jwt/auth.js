const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");


// username is in the form { username: "my cool username" }
// ^^the above object structure is completely arbitrary
function generateAccessToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign({ username }, "screttoken", { expiresIn: '24h' });
}

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    var authHeader = req.query.token || req.body.token || req.headers.authorization;
    var token = authHeader && authHeader.split(' ')
    if (token !== undefined) {
            token = token[1]
            jwt.verify(token, "screttoken", (err, decode) => {
                if (!err) {
                    req.decode = decode;
                    next(); // pass the execution off to whatever request the client intended
                }
                else {
                    res.json(
                        {
                            "error": {
                                "status": 401,
                                "code": "AUT_02",
                                "message": "Access Unauthorized",
                                "field": "NoAuth"
                            }
                        }
                    )
                }
            })
    } else {
        res.json(
            {
                "error": {
                    "status": 401,
                    "code": "AUT_02",
                    "message": "Access followefollowersrs",
                    "field": "NoAuth"
                }
            }
        )
    }
}

module.exports = { generateAccessToken, authenticateToken }
