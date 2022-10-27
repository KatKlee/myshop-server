import jwt from 'jsonwebtoken'

// function to create a token
export const createToken = (claims) => {
    // create token with sign() method from jsonwebtoken, hashed with secret
    const token = jwt.sign(claims, process.env.JWT_SECRET, { expiresIn: '1h' })
    // response is the token
    return token
}

export const checkToken = (req, res) => {
    const token = req.body.token
    console.log(req.body)
    // verify the token
    const claim = jwt.verify(token, process.env.JWT_SECRET)
    res.status(200).json({ claim })
}

export const verifyToken = (token) => {
    const result = jwt.verify(token, process.env.JWT_SECRET)
    return result
}