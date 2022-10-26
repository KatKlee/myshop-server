import { createHmac } from 'crypto'

// encrypt the user password with Hmac utility for creating cryptographic HMAC digests
export const encrypt = (req, _, next) => {
    // with hash function sha256 (outputs a value that is 256 bits long)
    const hmac = createHmac('sha256', req.body.password)
    // returns the hmac hash value of inputted data as hexadecimal digests
    req.body.password = hmac.digest('hex')
    /* console.log(req.body.password) */
    next()
}