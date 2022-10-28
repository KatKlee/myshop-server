import { verifyToken } from "../util/token.js"

export const checkTokenMiddleware = (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authentication.split(" ")[1]
        const result = verifyToken(token)
        console.log(result)
        next()

    } catch (error) {
        console.log(error)
        res.status(403).json({ state: false })
    }
}